import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
    font-family: 'Source Code Pro';
    background-color: #191919;
    color: rgba(250, 250, 250, 0.9);
  }
`;

export default GlobalStyle;