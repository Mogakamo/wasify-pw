import React from 'react'
import ValidatedLoginFo from '../components/ValidatedLoginForm'
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

	  <ValidatedLoginForm />

	  <Footer />	
	 </>
	)
}

export default SignIn
