import type { ThemeConfig } from 'antd';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    background: #f2f5f8;
    color: #3f3f3f;
    padding: 0;
    margin: 0;
    height: 100%;
  }

  input, button, svg {
    font-family: inherit;
    color: inherit;
  }

  .ant-layout {
    height: 100%;
  }
`;

export const Theme: ThemeConfig = {};
