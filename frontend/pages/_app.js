import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { DataProvider } from '../store/GlobalState'
import '../styles/loading.css'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  )
}

export default MyApp
