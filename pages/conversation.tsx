import { Cross, Send } from "@/asset";
import {
  ConversationStyle,
  MessageContainer,
  MessageWrapper,
} from "@/container/conversation/style/conversation.style";
import { Input, Box } from "@chakra-ui/react";

import { useState, useEffect, useCallback, useRef } from "react";
import WebSocketInstance from "@/websocket";
import { ConnectionMessage, Message } from "@/interfaces";
import Image from "next/image";

const Rexxie_Soso = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState<string | null>("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messageContainerRef = useRef<HTMLDivElement | null>(null);

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
        imageUrl: image,
      };

      WebSocketInstance.newChatMessage(message);
      setInputText("");
    }
  }, [inputText, name, image]);

  useEffect(() => {
    WebSocketInstance.connect("wss://rexxie-soso.onrender.com/ws");
    WebSocketInstance.addCallbacks(handleIncomingMessage);
  }, [handleIncomingMessage]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <ConversationStyle>
        <div className="message-container" ref={messageContainerRef}>
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
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <div style={{ fontSize: "10px" }}>{message.author}</div>
                  {message.body}
                </div>
              </MessageWrapper>
            </MessageContainer>
          ))}
          <div ref={messagesEndRef} />
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
            onKeyDown={handleKeyDown}
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
