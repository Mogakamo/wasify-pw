import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { useUser } from '../lib/hooks'

const Signup = () => {

    const [user, { mutate }] = useUser()
    const [errorMsg, setErrorMsg] = useState()

    useEffect(() => {
      if (user) Router.replace('/');
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            email: e.currentTarget.email.value,
            name: e.currentTarget.name.value,
            password: e.currentTarget.password.value,
        }
        const res = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
        if (res.status === 201) {
            const userObj = await res.json()

            mutate(userObj)
        } else {
            setErrorMsg(await res.text())
        }
    }

    return (
      
    );
}

export default Signup