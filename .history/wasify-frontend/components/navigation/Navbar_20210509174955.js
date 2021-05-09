import { signIn, signOut, useSession } from 'next-auth/client'

const Navbar = () => {
    const [ session, loading ] = useSession()

    return (
        <>
         {!session && 
         <div>
             
         </div>
         }
         {session && 
         <>
         
         </>
         }
        </>
    )
}

export default Navbar