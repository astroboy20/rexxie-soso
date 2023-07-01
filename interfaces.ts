export interface Message {
  author: string;
  body: string;
  variant: "chat" | "connection";
}

export interface ConnectionMessage {
  type: "connection";
  clientId: string;
}

export interface IWebSocketService {
  socketRef: WebSocket | null;
  callbacks: Map<any, any> | null;
}