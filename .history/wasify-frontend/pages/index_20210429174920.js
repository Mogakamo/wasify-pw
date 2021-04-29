import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { signIn, signOut, useSession } from 'next-auth/client'
import { dbConnect } from '../../middlewares/db'

export async function getServerSideProps(context) {
  dbConnect();
  const users = await User.find({}).exec();

  r
}

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
