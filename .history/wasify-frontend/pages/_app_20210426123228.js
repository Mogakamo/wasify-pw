import '../styles/globals.css'
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  re
  <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>;
  );   
}

export default MyApp
