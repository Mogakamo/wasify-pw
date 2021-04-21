import React from 'react'
import LoginForm from '../components/LoginForm'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Head from 'next/head'

const SignIn = () => {
	return (
	 <>
	  <Head>
		<title>Sign In</title>
	  </Head>	
          <NavBar />

	  <LoginForm />

	  <Footer />	
	 </>
	)
}

export default SignIn
