import { createGlobalStyle } from "styled-components";
import "modern-normalize";

const GlobalStyle = createGlobalStyle`
  html {
    --color-green: #30B94D;
    --color-background: white;
    --color-primary: rebeccapurple;
  }
  
  body {
    color: red;
  }
`;

export default GlobalStyle;
