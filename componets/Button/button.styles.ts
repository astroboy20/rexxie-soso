import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const DefaultButton = styled.button<{variant: string}>`
    background: #0A6634;
    color:#ffffff ;
    border-radius:4px;
    font-size: 29px;
    font-weight: 400;
    padding: 14px 140px;
    ${responsive("$small")`
        padding:10px 20px;
    `}
    
`