import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import { Provider } from "next-auth/client";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { init } from "../utils/sentry";

in

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} err={err} />
    </Provider>
  );
}

export default MyApp;
