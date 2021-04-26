import '../styles/globals.css'
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  <Provider session={}>
    <Component {...pageProps} />
  </Provider>;
  return 
}

export default MyApp
