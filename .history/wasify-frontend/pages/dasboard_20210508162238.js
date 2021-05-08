import { getSession } from 'next-auth/client'

export default function Dashboard({ user }) {
    return (
        <>

        </>
    )
}

export async function getServerSideProps(ctx) {
    const session = await 
}