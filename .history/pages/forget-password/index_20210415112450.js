import React, { useState } from 'react'
import Head from 'next/head'

const ForgetPasswordPage = () => {
    const [msg, setMsg] = useState({ message: '', isError: false })

    async function handleSubmit(e) {
        e.preventDefault(e);

        const body = {
            email: e.currentTarget.email.value,
        }

        const res = await fetch('/api/user/password/reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })

        if (res.status === 200 ) {
            setMsg({ message: 'An email has been sent to your mailbox'})
        } else {
            setMsg({ message: await res.text(), isError: true })
        }
    }

    return (
        <>
         <Head>
             <title>Forgot Password</title>
         </Head>

        <h2>Forgot password</h2>
        {msg.message ? <p style={{ color: msg.isError ? 'ref'}}></p>}    


        </>
    )
}

export default ForgetPasswordPage