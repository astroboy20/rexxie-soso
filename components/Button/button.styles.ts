import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const DefaultButton = styled.button<{variant: string}>`
    background: #0A6634;
    color:#ffffff ;
    border-radius:4px;
    font-size: 29px;
    font-weight: 300;
    padding: 14px 140px;
    cursor: pointer;
    ${responsive("$small")`
        padding:10px 20px;
        font-size:17px;
    `}
    
`
export const TransparentButton = styled.button<{variant: string}>`
    color: #0A6634;
    border:1.5px solid #0A6634;
    background-color:transparent ;
    border-radius:4px;
    font-size: 29px;
    font-weight: 400;
    padding: 14px 140px;
    cursor:pointer;
    ${responsive("$small")`
        padding:10px 20px;
        font-size:17px;
    `}
    
`