import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`

${reset}



  body { 
    transition: all 1s linear;
  }


`;
