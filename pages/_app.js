import React from 'react'
import Head from 'next/head'
import '../styles/tailwind.css'

export default function MyApp({ Component, pageProps }) {
  return(
    <Component {...pageProps} />
  )
}
