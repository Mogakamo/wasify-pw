import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import { Provider } from "next-auth/client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function MyApp({ Component, pageProps }) {
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.PAYPAL_CLIENT_ID.clientId }}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </PayPalScriptProvider>
  );
}

export default MyApp;
