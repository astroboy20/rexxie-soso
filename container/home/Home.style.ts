import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .sub-text{
        display: flex;
        flex-direction: column;
        padding:0 5%;
        gap: 10px;
    }

    ${responsive("$small")`
        padding:3%;
        .sub-text{
            padding:0 2%;
        }

    `}
`