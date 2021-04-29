import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { signIn, signOut, useSession } 

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
