import React from 'react'
import Head from 'next/head'

const SignIn = () => {
	return (
	 <>
	  <Head>
		<title>Sign In</title>
	  </Head>	
          
	  <ValidatedLoginForm />

	  <Footer />	
	 </>
	)
}

export default SignIn
