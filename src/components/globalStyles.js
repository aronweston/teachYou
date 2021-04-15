import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Font from '../assets/fonts/Recoleta-Black.ttf';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Recoleta';
    src: url(${Font}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  } 
  
  body {
   background: var(--background);
   font-family: ui-sans-serif, system-ui,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-serif	font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    font-mono	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  :root {
    --red: #e6555a;
    --text: #2d3958;
    --background: #f8faff;
    --font-primary: 'Recoleta',sans-serif
  }


  h1, h2, h3, span {
    font-family: var(--font-primary);
    font-weight: 900;
  }
  
  h1 {
    color: white;
    font-size: 50px;
  }


  //media queries
  
  @media (min-width: 768px) {


  }

  @media (min-width: 1440px) {
    h1 {
      font-size: 65px;
    }
  }

`;

export default GlobalStyle;
