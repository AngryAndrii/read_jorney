import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

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
  }
  
  body {
    color: var(--color-secondary);
    background-color: var(--color-back);
  }

  ul {
    padding: 0;
    list-style-type: none;
  }
`;

export default GlobalStyle;
