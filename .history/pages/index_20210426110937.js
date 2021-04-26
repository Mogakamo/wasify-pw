import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import Layout from '../components/Layout'

export default function Home({ isConnected }) {
  return (
      <Head>
        <title>Wasify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  
      
  )
        {/**{isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )}*/}

        
}

//export async function getServerSideProps(context) {
  //const { client } = await connectToDatabase()

 // const isConnected = await client.isConnected()

  //return {
   // props: { isConnected },
  //}
//}//
