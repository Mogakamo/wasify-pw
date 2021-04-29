import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { signIn, signO}

export default function Home() {
  return (
    <>
      <Head>
        <title>Wasify</title>
      </Head>


      <Layout />
    </>  
  ) 
}
