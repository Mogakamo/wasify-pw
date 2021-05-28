//example of server side protection 
import { getSession } from 'next-auth/client'

export default function Dashboard({ user }) {
    return (
        <>
            <h1>Dashboard</h1>
            <p>Welcome {user.email}</p>
        </>
    )
}

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    if (!session) {
        ctx.res.writeHead(302, { Location: '/' })
        ctx.end()
        return {}
    }
    return {
        props: {
            user: session.user,
        },
    }
}