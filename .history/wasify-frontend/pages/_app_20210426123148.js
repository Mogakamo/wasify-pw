import '../styles/globals.css'
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  <Provider session={pageProps}>
    <Component {...pageProps} />
  </Provider>;
  return 
}

export default MyApp
