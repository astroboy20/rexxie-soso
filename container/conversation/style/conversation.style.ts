import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const ConversationStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding:2% 3%;
    ${responsive("$small")`
       
    `}
`
export const Left = styled.div`
    display: flex;
    justify-content: right;

    ${responsive("$small")`
       
    `}
`
export const Right = styled.div`
     display: flex;
    justify-content: right;

    ${responsive("$small")`
       
    `}
`

