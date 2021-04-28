import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import { Provider } from "next-auth/client";
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core'

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <Provider session={pageProps.session}>
	  <CSSReset />
      <Component {...pageProps} />
    </Provider>
  <ThemeProvider>
  );
}

export default MyApp;
