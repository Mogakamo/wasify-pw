import React from "react";
import { Provider } from "next-auth/client";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router } from "react-router-dom";
import Crisp from "../components/crisp";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <Crisp />
    </Provider>
  );
}
