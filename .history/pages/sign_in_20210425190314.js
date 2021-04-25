import React from 'react'
import { provider, signIn, getSession, csrfToken } from 'next-auth'

const SignIn = (provider, csrfToken) => {
    return (
        <>

        </>
    )
} 

SignIn.getInitialProps = async(context) => {
    const req, res) = context;
}

export default SignIn