import Head from 'next/head'
import { useState, useContext } from 'react'
import { DataContext } from '../store/GlobalState'

const Profile = () => {
    const initialState = {
        avatar: '',
        name: '',
        password: '',
        cf_password: ''
    }
    const [data, setData] = useState(initialState)
    const {avatar, name, password, cf_password} = data

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
                        <img src={auth.user.avatar} alt={auth.user.avatar} />
                    </div>
                </div>
                <div className="col-md-8">
                    <h3>Orders</h3>
                </div>
            </section>
        </div>
    )
}

export default Profile