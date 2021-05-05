import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { withApollo } from '../lib/withApollo'
import { useFetchUser } from '../lib/user'

function Home() {
  const { user, loading } = useFetchUser()
  if (loading) {
    return <div>Loading...</div>
  }

  if (!loading && !user) {
    
  }
  
}

export default withApollo()(Home)