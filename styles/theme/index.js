import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat',  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  overflow: auto;
  overflow-x: hidden;
 
}

a {
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
  
}

* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  background-color: white;
    width: 4px;
  }
  ::-webkit-scrollbar-corner {
    background-color: #e9e9e9;
  }
  ::-webkit-scrollbar-thumb {
    background-color:rgba(182, 182, 182, 0.9);
    border-radius: 2px;
  }

  @media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: white;
  }
}
`;

export const theme = {
  fontWeight: {
    sm: 300,
    md: 500,
    lg: 700,
    xl: 900,
  },
  fontSize: {
    xs: "10px",
    sm: "0.875rem",
    smm: "0.9375rem",
    md: "1rem",
    lg: "18px",
    xl: "1.125rem",
    xxl: "26px",
    xxxl: "2.25rem",
    xll: "3.375rem",
  },
  fontLineHeight: {
    xs: "1.125",
    sm: "1.5",
    smm: " 1.125 ",
    md: "1.1875",
    ml: "32px",
    lg: "21px",
    lgg: "29px",
    xl: "1.1875",
    xxl: "26px",
    xxxl: "1.1875",
    xll: "3.75rem",
  },
  colors: {
    white: "#ffffff",
    black: "#0a0a0a",
    antrasite: "#444444",
    blue: "#0091d7",
    gray: "#cacaca",
  },
};
