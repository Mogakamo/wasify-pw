import "tailwindcss/tailwind.css";
import { Provider } from 'nex'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
