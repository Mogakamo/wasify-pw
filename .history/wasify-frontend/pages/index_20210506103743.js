import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'

export default function Home({ isConnected }) {
  return (
    <>

    </>
  )
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()

  return {
    props: { cted },
  }
}
