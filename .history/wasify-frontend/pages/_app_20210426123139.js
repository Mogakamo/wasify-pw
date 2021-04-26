import '../styles/globals.css'
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  <Provider sessio>
    <Component {...pageProps} />
  </Provider>;
  return 
}

export default MyApp
