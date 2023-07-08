import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const ConversationStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 2% 3%;
  ${responsive("$small")`
       
    `}
`;

export const MessageContainer = styled.div<{ isOutgoing: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isOutgoing }) =>
    isOutgoing ? "flex-end" : "flex-start"};
  /* position: fixed; */
  height: 100px;
  /* overflow-y: scroll; */
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const MessageWrapper = styled.div<{ isOutgoing: boolean }>`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 8px 2%;
  font-size: 16px;
  background-color: ${({ isOutgoing }) => (isOutgoing ? "#0A6634" : "#E7F2EC")};
  border-radius: 8px;
  color: ${({ isOutgoing }) => (isOutgoing ? "#fff" : "#000")};
`;
