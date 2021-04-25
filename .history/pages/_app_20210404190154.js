import '../styles/globals.css'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module 
import 'nprogress/nprogress.css'  //styles for the nprogress package
import Head from 'next/head'

const MyApp = ({
    MainComponent,
    pageProps,
  }) => {
    const router = useRouter();
    const [pageLoading, setPageLoading] = React.useState < boolean > (false);
    React.useEffect(() => {
      const handleStart = () => {
        setPageLoading(true);
      };
      const handleComplete = () => {
        setPageLoading(false);
      };

      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);
    }, [router]);


/**Binding events for the loader
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


function MyApp({ Component, pageProps }) {
  */
  return (
  <>

  )
}

export default MyApp
