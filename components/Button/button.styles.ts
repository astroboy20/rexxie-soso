import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const DefaultButton = styled.button<{variant: string}>`
    background: #0A6634;
    color:#ffffff ;
    border-radius:4px;
    font-size: 20px;
    font-weight: 300;
    padding: 14px 140px;
    cursor: pointer;
    ${responsive("$small")`
        padding:10px 20px;
        font-size:17px;
    `}
    
`
export const TransparentButton = styled.button<{variant: string}>`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #0A6634;
    border:1.5px solid #0A6634;
    background-color:transparent ;
    border-radius:4px;
    font-size: 20px;
    font-weight: 400;
    padding: 14px;
    cursor:pointer;
    ${responsive("$small")`
        padding:10px 20px;
        font-size:17px;
    `}
    
`
export const SmallButton = styled.button<{variant: string}>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    border:1.5px solid #0A6634;
    background-color:transparent ;
    border-radius:4px;
    font-size: 14px;
    font-weight: 400;
    padding: 14px;
    cursor:pointer;
    ${responsive("$small")`
        padding:10px 20px;
        font-size:17px;
    `}
    
`