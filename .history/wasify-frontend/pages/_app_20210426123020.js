import '../styles/globals.css'
import {Provider} from 'next-aut'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
