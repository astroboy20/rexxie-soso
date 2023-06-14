const WebSocket = require('ws');
const { v4: uuidv4 } = require("uuid");

// This defines the client object
const clients = new Set();

// Create a WebSocket server instance and set the port to 8080
const websocketServer = new WebSocket.Server({ port: 8080 });

// Create a function to handle messages
const handleMessage = (message, clientId) => {
    const parsedMessage = JSON.parse(message);

    switch (parsedMessage.type) {
        case 'chat':
            broadcastMessage(parsedMessage.text, clientId);
            break;
    }
};

// Create a function to broadcast messages
const broadcastMessage = (message, senderId) => {
    clients.forEach((client) => {
        if (client.id !== senderId) {
            client.socket.send(JSON.stringify({ type: 'chat', message }));
        }
    });
};

// Create an event listener that handles connection for the clients
websocketServer.on('connection', (ws) => {
    // Generate a unique id for the client
    const clientId = uuidv4();
    // Add the client to the set of connected clients
    clients.add({ id: clientId, socket: ws });

    // Create an event listener for messages
    ws.on('message', (message) => {
        handleMessage(message, clientId);
    });

    // Create an event listener for closing connection
    ws.on('close', () => {
        clients.forEach((client) => {
            if (client.id === clientId) {
                clients.delete(client);
            }
        });
    });

    // Send connection message to the client including the type and clientId
    ws.send(JSON.stringify({ type: 'connection', clientId }));
});

// Export the WebSocket server
module.exports = { websocketServer };
