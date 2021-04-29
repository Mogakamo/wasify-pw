import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { signIn, signOut, useSession } from 'next-auth/client'
import { dbConnect, jsonify } from '../../middlewares/db'

export async function getServerSideProps(context) {
  dbConnect();
  const users = await User.find({}).exec();

  return {
    props: {
      users: jsonify(users),
    },
  };
}


export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>Wasify</title>
      </Head>

      {
        session ? (
          <button onClick={signOut}>sign out</button>
        ) : (
          <button onClick></button>
        )
      }
      {/**<Layout />*/}
    </>  
  ) 
}
