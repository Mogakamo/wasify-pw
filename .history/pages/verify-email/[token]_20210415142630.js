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
          <p>{success ? 'Than you for verifying your email address. You may close this page.' : 'This link may have expired.'}</p>
        </>
    )
}

export async function getServersideProps(ctx) {
    const handler = nc()
    handler.use(all)
    await handler.run(ctx.req, ctx.res)

    const { token } = ctx.query
    const deletedToken = await findAndDeleteTokenByIdAndType(ctx.req.db, token, 'emailVerify')

    if(!deletedToken) return { props: { success: false } };

    await updateUserById(ctx.req.db, deletedToken.creatorId, { emailVerified: true })

    return { props: { success: true } }
}
export default EmailVerifyPage