import "tailwindcss/tailwind.css";
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return(
  <>
   <Provider session={pageProps.sessio}>   
    <Component {...pageProps} />
  </>
  );
}

export default MyApp;
