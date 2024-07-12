import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyles } from "../styles/global-styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
