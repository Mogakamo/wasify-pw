import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Container from '../components/Loader'
import { getSession, signIn, signOut } from 'next-auth/client'


export default function Home({ session, }) {
    const signInBi

  return (
    <>
    <div>
      <Head>
        <title>Wasify</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
      <Layout />
    </>
  )
}
