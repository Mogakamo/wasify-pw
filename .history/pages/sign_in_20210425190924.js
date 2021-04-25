import React from 'react'
import { provider, signIn, getSession, csrfToken } from 'next-auth'

const SignIn = (provider, csrfToken) => {
    return (
        <>

        </>
    )
} 

SignIn.getInitialProps = async(context) => {
    const {req, res} = context;
    const session = await getSession({req});

    if (session && res && accessToken) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end();
        return;
    }
    return {
        session: undef
    }
}

export default SignIn