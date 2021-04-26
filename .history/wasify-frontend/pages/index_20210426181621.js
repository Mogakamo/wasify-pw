import Head from "next/head";
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import Layout from '../components/Layout'

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div>
      <Head>
        <title>Auth Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={signIn}>Sign In</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <div>You can now access our super secret pages</div>
            <button>
              <Link href="/secret">To the secret</Link>
            </button>
            <button onClick={signOut}>sign out</button>

            <Layout />
          </>
        )}
      </main>
    </div>
  );
}
