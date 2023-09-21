import { createGlobalStyle } from 'styled-components';

export const Theme = {};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    background: #1f1f1f;
    color: #fff;
    padding: 0;
    margin: 0;
    height: 100%;
  }
`;
