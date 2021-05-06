import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'

export default function Home({ isConnected }) {
  return (
    <>

    </>
  )
}

export async function getServerSideProps(context) {
  const {  } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
