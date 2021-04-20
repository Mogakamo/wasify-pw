import React from 'react'
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
