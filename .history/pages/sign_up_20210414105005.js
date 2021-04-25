//sign up page 
import React from 'react'
import Head from 'next/head'
import SignUpForm from '../components/SignUp-Form'
import Navbar from '../components/NavBar'

class SignUp extends React.Component {
    render() {
        return (
            <>
            <div>
                <Head>
                    <title>Sign Up</title>
                </Head>
            </div>

            <Navbar />

            <SignUpForm />

            <Fo/>

            </>
        )
    }
}

export default SignUp