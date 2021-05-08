import "tailwindcss/tailwind.css";
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return(
  <>
   <R>   
    <Component {...pageProps} />
  </>
  );
}

export default MyApp;
