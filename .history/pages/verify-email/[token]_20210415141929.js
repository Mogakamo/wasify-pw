import React from 'react'
import Head from 'next/head'
import nc from 'next-connect'
import { all } from '@/middlewares/index'
import { updateUserById, findAndDeleteTokenByIdAndType } from '@/db/index'


const EmailVerifyPage = ({ success }) => {
    return (
        <>
          <Head></Head>
        </>
    )
}

export default EmailVerifyPage