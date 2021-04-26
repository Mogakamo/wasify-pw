import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'


export default function Home() {
  const [sesssion, loading] = useSession();


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={signIn}>Sign in</button>
          </>
        )}
        {
          session && (
            
          )
        }
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
