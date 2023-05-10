import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const IntroStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .sub-text{
        display: flex;
        width: 50%;
        flex-direction: column;
        gap: 5px;
        text-align: center;
        
    }

    ${responsive("$small")`
        align-items: normal;
        text-align:center;
        padding:3%;
        .sub-text{
            width:100%;
            gap:15px;

        }

    `}
`