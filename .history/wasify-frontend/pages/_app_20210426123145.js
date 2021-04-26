import '../styles/globals.css'
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  <Provider session={page}>
    <Component {...pageProps} />
  </Provider>;
  return 
}

export default MyApp
