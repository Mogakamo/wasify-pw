import Head from 'next/head'
import { useContext } from 'react'
import { DataContext } from '../store/GlobalState'

const Profile = () => {
    const { state, dispatch } = useContext(DataContext)
    const { auth } = state

    return (
        <div>
            <Head>
                <title>Profile</title>
            </Head>

            <section className="row text-secondary">
                <div className="col-md-4">
                    <h3 className="text-center text-uppercase">{auth.user.role === 'user' ? 'User Profile' : 'Admin Profile'}</h3>
                    <div className="avatar">
                        <img src="" />
                    </div>
                </div>
                <div className="col-md-8"></div>
            </section>
        </div>
    )
}

export default Profile