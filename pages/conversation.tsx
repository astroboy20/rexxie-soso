import { Cross, Send } from "@/asset";
import {
  ConversationStyle,
  Left,
} from "@/container/conversation/style/conversation.style";
import { Input, Box } from "@chakra-ui/react";

import { useState, useRef, useEffect, useCallback } from "react";
import WebSocketInstance from "@/websocket";
import { ConnectionMessage, Message } from "@/interfaces";
import Image from "next/image";

const Rexxie_Soso = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [image,setImage] = useState<string | null>(null)


  useEffect(() => {
    if (typeof window !== "undefined") {
      const selectedImage = localStorage.getItem("selectedImg");
      setImage(selectedImage);
    }
  }, []);
  

  const handleIncomingMessage = useCallback((body: Message) => {
    switch (body.variant) {
      case "connection":
        console.log(`ClientID: New Device Connection`);
        break;
      case "chat":
        setMessages((prevMessages) => [...prevMessages, body]);
        break;
      default:
        break;
    }
  }, []);

  const handleSendMessage = useCallback(() => {
    if (inputText.trim() !== "") {
      const message: Message = {
        variant: "chat",
        author: "me",
        body: inputText,
      };

      WebSocketInstance.newChatMessage(message);
      setInputText("");
    }
  }, [inputText]);

  useEffect(() => {
    WebSocketInstance.connect("wss://rexxie-soso.onrender.com/ws");
    WebSocketInstance.addCallbacks(handleIncomingMessage);
  }, [handleIncomingMessage]);

  return (
    <>
      <ConversationStyle>
        <div>
          {messages.map((message, index) => (
            <div key={index}>
              {" "}
              <Image
                src={image ?? ''}
                alt="selected-img"
                width={20}
                height={20}
              />
              <div>{message.body}</div>
            </div>
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
            onChange={(e) => setInputText(e.target.value)}
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
