import React from 'react'
import Head from 'next/head'
import nc from 'next-connect'
import { all } from '@/middlewares/index'
import { updateUserById, findAndDeleteTokenByIdAndType } from '@/db/index'


const EmailVerifyPage = ({ success }) => {
    return (
        <>
          <Head>
              <title>Sign up</title>
          </Head>
          <p>{success ? 'Than you for verifying your email address'}</p>
        </>
    )
}

export default EmailVerifyPage