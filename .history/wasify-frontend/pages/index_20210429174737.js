import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { signIn, signOut, useSession } from 'next'

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
