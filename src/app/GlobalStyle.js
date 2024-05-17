import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import '../App.css';
import '../fonts/gilroy/Gilroy-Bold.ttf';
import '../fonts/gilroy/Gilroy-Medium.ttf';

const GlobalStyle = createGlobalStyle`
  html {
    --color-primary: #1F1F1F;
    --color-secondary: #F9F9F9;
    --color-back: #141414;
    --color-gray: #686868;
    --color-gray-30: rgba(227, 227, 227, 0.3);
    --color-gray-dark: #262626;
    --color-blue: #4f92f7;
    --color-green: #30B94D;
    --radius-30: 30px;
  }
  
  body {
    color: var(--color-secondary);
    background-color: var(--color-back);
    letter-spacing: 2%;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  .title {
    font-family: "GilroyBold";
    line-height: 1;
  }

`;

export default GlobalStyle;
