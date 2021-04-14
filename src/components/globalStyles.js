import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
   background: white;
  }

  :root {
    --primary: #203631;
    --secondary: #f49393;
    --background: #f5f5f5;
    --font-primary: "", serif;
    --font-secondary: "", serif;
    --paragraph-font: "", sans-serif;
  }

`;

export default GlobalStyle;
