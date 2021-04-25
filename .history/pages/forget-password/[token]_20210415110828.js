import React from 'react'
import Head from 'next/head'
import nc from 'next-connect'
import Router from 'next/router'
import { database } from '@middlewares/index'
import { findTokenByIdAndType } from '@/db/index'


const ResetPasswordTokenPage = ({ valid, token }) => {
    async function handleSubmit(event) {
        event.preventDefault();
        const body = {
            password: event.currentTarget.password.value,
            token,
        };

        const res = await fetch('/api/user/password/reset', {
            method: 'PUT',
            headers: { 'ContentType': 'application/json' },
            body: JSON.stringify(body),
        })

        if (res,status === 200) Router.replace('/');
    }

    return (
        <>
         <Head>
             <title>Forgot Password</title>
         </Head>

         <h2>Forgot password</h2>
         {valid ? (
             <>
              <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        name="password"
                        type="password"
                        placeholder="New Password"
                    />
                </div>
                <button type="submit">Set new password</button>
              </form>
             </>
         ) : (
             <p>This link may have expired </p>
         )}
        </>
    )
}