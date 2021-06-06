import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext } from 'react'
import valid from '../backend/utils/valid'
import { DataContext } from '../store/GlobalState'

const Register = () => {
    const initialState = { name: '', email: '', password: '', cf_password: '' }
    const [userData, setUserData] = useState(initialState)
    const { name, email, password, cf_password } = userData

    const [state, dispatch] = useContext(DataContext)

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const errMsg = valid(name, email, password, cf_password)
        if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } })

        dispatch({ type: 'NOTIFY', payload: { loading: true } })

        const res = await postData('auth/register', userData)

        if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

        return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
    }
    return (
        <>
            <div>
                <Head>
                    <title>Wasify - Sign Up</title>
                </Head>


                <form className="mx-auto my-4" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label htmlFor="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" name="name" value={name} onChange={handleChangeInput} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={handleChangeInput} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={password} onChange={handleChangeInput} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputPassword2" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword2" name="cf_password" value={cf_password} onChange={handleChangeInput} />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-dark">register</button>
                    <p >Do you have an account?
          <Link href="/register">
                            <a style={{ color: 'green' }}> Login now</a>
                        </Link>
                    </p>
                </form>

            </div>
        </>
    )
}

export default Register