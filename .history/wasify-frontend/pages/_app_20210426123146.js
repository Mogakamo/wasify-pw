import '../styles/globals.css'
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  <Provider session={pageP}>
    <Component {...pageProps} />
  </Provider>;
  return 
}

export default MyApp
