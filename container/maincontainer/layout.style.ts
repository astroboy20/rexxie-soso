import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const LayoutStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: 3%;
    gap: 10px;
    .header{
        text-align: center;
    }
    ${responsive("$small")`
        align-items: center;
        text-align:center;
        justify-content:center;
        padding:3%;
        .header{
            text-align:left;
        }
    `}
`
export const ButtonStyle = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

`
export const SubText = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    ${responsive("$small")`
        width:100%;
        gap:15px;
    `}

`
export const Avatar = styled(SubText)`
   
    ${responsive("$small")`
         display: flex;
         flex-direction: column;
         justify-content: center;
        width:100%;
        gap:15px;
    `}
`

export const HomeSubText = styled(SubText)`
   text-align: left;
    width:35%;
    form{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    ${responsive("$small")`
        width:100%;
        gap:15px;
    `}
`
export const IntroSubText = styled(SubText)`
    ${responsive("$small")`
        width:100%;
        gap:15px;
    `}
`
export const AvatarSubText = styled(SubText)`
    ${responsive("$small")`
        width:100%;
        gap:15px;
    `}
    ${responsive("$xsmall")`
       width:100%;
       gap:15px;
    `}
`
