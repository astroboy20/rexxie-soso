import { Cross, Send } from "@/asset";
import {
  ConversationStyle,
  MessageContainer,
  MessageWrapper,
} from "@/container/conversation/style/conversation.style";
import { Input, Box } from "@chakra-ui/react";

import { useState, useEffect, useCallback } from "react";
import WebSocketInstance from "@/websocket";
import { ConnectionMessage, Message } from "@/interfaces";
import Image from "next/image";

const Rexxie_Soso = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState<string | null>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const selectedImage = localStorage.getItem("selectedImg");
      setImage(selectedImage);
      const selectedName = localStorage.getItem("name");
      setName(selectedName);
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
        author: name,
        body: inputText,
      };

      WebSocketInstance.newChatMessage(message);
      setInputText("");
    }
  }, [inputText, name]);

  useEffect(() => {
    WebSocketInstance.connect("wss://rexxie-soso.onrender.com/ws");
    WebSocketInstance.addCallbacks(handleIncomingMessage);
  }, [handleIncomingMessage]);

  return (
    <>
      <ConversationStyle>
        {messages.map((message, index) => (
          <MessageContainer key={index} isOutgoing={message.author === name}>
            <Image
              src={image ?? ""}
              alt="selected-img"
              width={20}
              height={20}
            />
            <MessageWrapper isOutgoing={message.author === name}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <div style={{ fontSize: "10px" }}>{name}</div>
                {message.body}
              </div>
            </MessageWrapper>
          </MessageContainer>
        ))}

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
          zIndex="1"
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
