import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const ConversationStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 2% 3%;
  ${responsive("$small")`
       
    `}
  .message-container {
    max-height: 70vh;
    overflow-y: auto;
   
  }
  .message-container::-webkit-scrollbar {
  display: none;
}
`;

export const MessageContainer = styled.div<{ isOutgoing: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ isOutgoing }) => (isOutgoing ? "flex-end" : "flex-start")};
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 5px 0; 
  flex-wrap: wrap; 
`;


export const MessageWrapper = styled.div<{ isOutgoing: boolean }>`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 8px 10px; 
  font-size: 16px;
  background-color: ${({ isOutgoing }) => (isOutgoing ? "#0A6634" : "#E7F2EC")};
  border-radius: 8px;
  color: ${({ isOutgoing }) => (isOutgoing ? "#fff" : "#000")};
  white-space: pre-wrap;
  word-break: break-word;
  width: 20%; 
`;
