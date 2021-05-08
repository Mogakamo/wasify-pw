import "tailwindcss/tailwind.css";
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return(
  <>
   <Provider s>   
    <Component {...pageProps} />
  </>
  );
}

export default MyApp;
