const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { websocketServer } = require("./websocket-server");

// Initialize the next app with dev to check if it is in development or production mode
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

// Define the handle variable to handle HTTP requests
const handle = app.getRequestHandler();

// The prepare method is used to handle requests
app.prepare().then(() => {

  // Create an HTTP server using createServer, which takes req & res as arguments
  createServer((req, res) => {

    // Use parse to get the URL and query parameters
    const parsedUrl = parse(req.url || "", true);
    const { pathname, query } = parsedUrl;

    // Check if the pathname is "/websocket"
    if (pathname === "/websocket") {
        
      // If true, upgrade the HTTP request to a WebSocket connection using handleUpgrade
      websocketServer.handleUpgrade(
        req,
        req.socket,
        Buffer.alloc(0),
        onConnect
      );
    } else {
      // If false, use the handle function to render the required page
      handle(req, res, parsedUrl);
    }

    // The onConnect function acts as a payload that allows the WebSocket server to handle incoming WebSocket connections
    function onConnect(ws) {
      websocketServer.emit("connection", ws, req);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
