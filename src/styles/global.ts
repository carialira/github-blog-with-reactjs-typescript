import { createGlobalStyle, css } from "styled-components";
// import { mixins } from "./mixins";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      height: 8px;
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({theme})=> theme["base-border"]};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background:  ${({theme})=> theme["base-label"]}; 
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['blue']};
  }


  html {
    font-size: 62.5%;
  }

  * body{
    overflow-x: hidden !important;
  }


  body {
 
    ${(props) => {
      return css`
        background: ${props.theme["base-background"]};
        color: ${props.theme["base-text"]};
      `;
    }}

    -webkit-font-smoothing: antialiased;
  }


  button {
    border: none;
    cursor: pointer;
  }
`;
