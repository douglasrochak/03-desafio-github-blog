import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    :focus {
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
    }
  }

  body {
    background-color: ${({ theme }) => theme["base-background"]};
    color: ${({ theme }) => theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["base-text"]};
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }
`;
