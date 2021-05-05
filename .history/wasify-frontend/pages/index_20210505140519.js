import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { withApollo } from '../lib/withApollo'
import { useFetchUser } from '../lib/user'
import Login from "../components/Auth/Login";


function Home() {
  const { user, loading } = useFetchUser()
  if (loading) {
    return <div>Loading...</div>
  }

  if (!loading && !user) {
    return (
      
    );  
  } else {
    return (
      <>

      </>
    )
  }
  
}

export default withApollo()(Home)