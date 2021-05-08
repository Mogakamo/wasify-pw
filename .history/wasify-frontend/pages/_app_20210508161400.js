import "tailwindcss/tailwind.css";
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return(
  <>
   <Provideer>   
    <Component {...pageProps} />
  </>
  );
}

export default MyApp;
