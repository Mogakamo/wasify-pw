import "tailwindcss/tailwind.css";
import { Provider } from 'next-auth'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
