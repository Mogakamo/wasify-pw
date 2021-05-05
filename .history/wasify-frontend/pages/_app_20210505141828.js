import React from "react";
import "tailwindcss/tailwind.css";
import Crisp from "../components/crisp";



export default function MyApp({ Component, pageProps }) {
  return (
      <>
      <Component {...pageProps} />
      <Crisp />
    </>
      );
}
