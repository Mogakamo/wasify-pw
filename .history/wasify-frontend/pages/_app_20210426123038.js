import '../styles/globals.css'
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  <Provider></Provider>
  return <Component {...pageProps} />
}

export default MyApp
