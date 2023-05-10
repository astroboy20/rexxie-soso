import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { fontFamily } from "./fonts";

export const GlobalStyles = createGlobalStyle`

${reset}
${fontFamily}



  body { 
    transition: all 1s linear;
  }


`;
