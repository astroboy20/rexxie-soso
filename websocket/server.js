import { IncomingMessage, ServerResponse, createServer } from "http";
import { parse } from 'url'
import next from 'next'
// import { WebSocketServer } from "ws";
import websocketServer from './websocket-server';


//initialize he next app with dev to check if it is in the developement or production mode
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

//define the handle variable to handle http requests
const handle = app.getRequestHandler()


//the prepare method is used to handle request
app.prepare().then(() => {

    //creatserver is used to creat an HTTP server taking req & res as arguements
    createServer((req, res) => {
        //parsed url is used to get the url and query parameters
        const parsedUrl = parse(req.url || '', true);
        const { pathname, query } = parsedUrl;
        //this checks if the pathname is websocket; if true the handleUpgrade upgrades the the HTTP request to a Websocket connection
        //else it uses the handle funtion to render the required page
        if (pathname === '/websocket') {
            websocketServer.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
        } else {
            handle(req, res, parsedUrl);
        }

        //the onConnect function acts as a payload that allows the websocket server to handle incoming websocket connections
        function onConnect(ws) {
            websocketServer.emit('connection', ws, req);
        } //this listens at  300 when the sever starts and logs the message 
    }).listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});




