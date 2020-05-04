import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%
  }

  body{
    padding: 0px 12px;
    background: #DAE0E6;
    -webkit-font-smooting: antialiased !important;
  }
`;
