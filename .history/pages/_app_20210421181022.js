import React from 'react'
import { }
import '../styles/tailwind.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Crisp from '../components/crisp'

export default function MyApp({ Component, pageProps }) {
  return(
    <>
	  <Component {...pageProps} />
	  <Crisp />
    </>
  )
}
