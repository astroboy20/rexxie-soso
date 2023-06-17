import { Cross, Send } from "@/asset";
import {
  ConversationStyle,
  Left,
} from "@/container/conversation/style/conversation.style";
import { Input, Box } from "@chakra-ui/react";

import { useState, useRef, useEffect } from "react";
import WebSocketInstance from "@/websocket";

interface Message {
  author: string;
  body: string;
  variant:string
}

interface ConnectionMessage {
  type: "connection";
  clientId: string;
}

// const webSocket = new WebSocket("wss://rexxie-soso.onrender.com/ws");
const Rexxie_Soso = () => {
  const [messages, setMessages] = useState<String[]>([]);
  const [inputText, setInputTeXt] = useState("");

//   webSocket.onopen = () => {
//     console.log("Connected to WebSocket server");
//   };

  //   const webSocket = new WebSocket ("wss://rexxie-soso.onrender.com/ws")

  const handleIncomingMessage = (body: any) => {
    switch (body) {
      case "connection":
        const connectionMessage: ConnectionMessage = body;
        console.log(`ClientID: ${connectionMessage.clientId}`);
        break;
      case "chat":
        setMessages((prevMessages) => [...prevMessages, body.message]);
        break;
      default:
        break;
    }
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== " ") {
      const message: Message = { variant: "chat", author:"me", body: inputText };
      WebSocketInstance.socketRef?.send(JSON.stringify(message));
      setInputTeXt("")
    }
  };

  useEffect(() => {
    WebSocketInstance.connect("wss://rexxie-soso.onrender.com/ws");
  }, []);

  return (
    <>
      <ConversationStyle>
        <div>
          {messages.map((body, index) => (
            <div key={index}>{body}</div>
          ))}
        </div>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          border="2px solid #0A6634"
          boxShadow="6px 12px 20px rgba(0, 0, 0, 0.14)"
          padding="1%"
          borderRadius="6px"
          position="fixed"
          bottom="5%"
          left="0"
          right="0"
          zIndex="10"
          margin="2% 4%"
        >
          <Input
            type="text"
            placeholder="Tell us how you feel"
            width="100%"
            border="none"
            padding="10px"
            value={inputText}
            onChange={(e) => setInputTeXt(e.target.value)}
          />
          <span onClick={handleSendMessage}>
            <Send />
          </span>
        </Box>
      </ConversationStyle>
    </>
  );
};

export default Rexxie_Soso;
