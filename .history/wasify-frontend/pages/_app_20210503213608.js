import React from "react";
import "tailwindcss/tailwind.css";
import Crisp from "../components/crisp";
import { supabase } from "../utils/initSupabase";



export default function MyApp({ Component, pageProps }) {
  return (
    <AuthenticatorAssertionResponse.UserContextProv>
      <Component {...pageProps} />
      <Crisp />
  );
}
