interface IWebSocketService {
  socketRef: WebSocket | null;
}

class WebSocketService implements IWebSocketService {
  socketRef: WebSocket | null = null;
  static instance: WebSocketService | null = null;
  callbacks = {};
  static getInstance() {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  constructor() {
    this.socketRef = null;
  }

  connect(URL: string) {
    console.log(URL);
    this.socketRef = new WebSocket(URL);
    this.socketRef.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    this.socketRef.onmessage = (event) => {
      // const message: Message = JSON.parse(event.data);
      // handleIncomingMessage(message);
      console.log(event.data);
    };
  }
}

const WebSocketInstance = WebSocketService.getInstance();
export default WebSocketInstance;
