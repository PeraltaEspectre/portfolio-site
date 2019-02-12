import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', Arial, Helvetica, sans-serif;
    background-color: ${props => props.theme.backgroundColor};
    color: rgba(250, 250, 250, 0.6);
    letter-spacing: 1px;
  }

  h1 {
    font-family: 'Playfair Display', 'Palatino', 'Times New Roman', Times, serif;
  }
`;

export default GlobalStyle;