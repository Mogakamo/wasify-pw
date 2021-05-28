import Head from 'next/head'
import { connectToDatabase } from '../utils/mongodb'

export default function Main({ isConnected }) {
  return (
    <>

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