
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/theme";
import { app, database } from '../firebase'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>

      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
