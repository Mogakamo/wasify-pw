import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import Layout from '../components/Layout'
import { signIn, signOut, useSession } from "next-auth/client";


export default function Home({ isConnected }) {
  const [session, loading] = useSession();

  return (
     <>
    {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  </>
  ) 
}
      