import React from "react";
import { Provider } from "next-auth/client";
import "tailwindcss/tailwind.css";
import Crisp from "../components/crisp";



export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <Crisp />
    </Provider>
  );
}
