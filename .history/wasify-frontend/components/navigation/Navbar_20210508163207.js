import { signIn, signOut, useSession } from 'next-auth/client'

const Navbar = () => {
    const [ session, loading ] = useSession()

    return (
        <>

        </>
    )
}

export default Navbar