import  { useEffect } from 'react'
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
  // useEffect config material-ui
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  
  return (
  <>
  
    <Head>
      <link 
          rel="stylesheet"
          href = "https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
      />
    </Head>
  <Provider store={store}>
      <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  </>
  )
}

export default MyApp
