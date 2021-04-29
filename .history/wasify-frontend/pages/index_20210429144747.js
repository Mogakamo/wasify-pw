import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
    /* 
  return (
    <>
      <Head>
        <title>Wasify</title>
      </Head>


      <Layout />
    </>  
  ) */
}
