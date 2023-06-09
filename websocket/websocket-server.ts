import WebSocket from 'ws'
import { v4 as uuidv4 } from "uuid"


//this defines the client object
interface Client {
    id: string,
    socket: WebSocket
}

//a websocket instance and set the port to 8080
const websocketServer = new WebSocket.Server({ port: 8080 })

//create a client set to store connected clients
const clients = new Set<Client>

//create a function to handle message
const handleMessage = (message: string, clientId: string) => {
    const parsedMessage = JSON.parse(message)

    switch (parsedMessage.type) {
        case 'chat':
            broadcastMessage(parsedMessage.text, clientId)
            break
    }
}

//create a function that broadcast message 
const broadcastMessage = (message: string, senderId: string) => {
    clients.forEach((client) => {
        if (client.id !== senderId) {
            client.socket.send(JSON.stringify({ type: 'chat', message }))
        }
    })
}

//create an event listener that create a connection for the clients 
websocketServer.on('connection', (ws: WebSocket) => {
    //this is a unique id for the client 
    const clientId = uuidv4()
    //this adds it to the clients set 
    clients.add({ id: clientId, socket: ws })


    //create an event listener for message
    ws.on("message", (message: string) => {
        handleMessage(message, clientId)
    })

    //create an event listener for closing connection: this deletes the clientId
    ws.on('close', () => {
        clients.forEach(client => {
            if(client.id === clientId){
                clients.delete(client)
            }
        });
        
    });

    //send connection message to the client includin the type and clientId
    ws.send(JSON.stringify({ type: "connection", clientId }))
})

export default websocketServer
