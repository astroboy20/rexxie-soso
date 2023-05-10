import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    .sub-text{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    ${responsive("$small")`
        align-items: normal;
        padding:3%;
        .sub-text{
            padding:0;

        }

    `}
`