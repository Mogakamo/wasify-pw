import '../styles/globals.css'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module 
import 'nprogress/nprogress.css'  //styles for the nprogress package
import Head from 'next/head'

//Binding events for the loader
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <link 
        />
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
