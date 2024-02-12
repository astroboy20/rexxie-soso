import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const DefaultButton = styled.button<{ variant: string }>`
  background: red;
  color: #ffffff;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 300;
  padding: 15px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  ${responsive("$small")`
    padding: 14px 20px;
    font-size: 17px;
  `}

  &:hover {
    color: red;
    /* color: #0a6634; */
    background: transparent;
    border: 2px solid red;
  }

  &:active {
    background: #ffffff;
    color: #0a6634;
  }
`;

export const TransparentButton = styled.button<{ variant: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #0a6634;
  border: 1.5px solid #ff007f;
  background-color: transparent;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 400;
  padding: 14px;
  cursor: pointer;
  ${responsive("$small")`
        padding:10px 20px;
        font-size:17px;
    `}

  &:hover {
    background: #0a6634;
    color: #fff;
  }
  &:active {
    background: #0a6634;
    color: #fff;
  }
`;
export const SmallButton = styled.button<{ variant: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  border: 1.5px solid #0a6634;
  background-color: transparent;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  padding: 14px;
  cursor: pointer;
  ${responsive("$small")`
        padding:10px 20px;
        font-size:17px;
    `}
`;
