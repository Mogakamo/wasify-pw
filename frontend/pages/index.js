import Head from 'next/head'
import { connectToDatabase } from '../utils/mongodb'
import { signIn, signOut, useSession } from 'next-auth/client'
import Layout from '../components/Layout'

export default function Main({ isConnected }) {
  return (
    <>
      <Layout />

      {/* {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )} */}
    </>
  )
}

export default function getServersideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}