import React, { useState } from 'react'
import Head from 'next/head'

const ForgetPasswordPage = () => {
    const [msg, setMsg] = useState({ message: '', isError: false })

    async function handleSubmit(e) {
        e.preventDefault(e);

        const body = {
            email: e.currentTarget.email.value,
        }

        const res = await fetch('/api/user/password/reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
    }
}

export default ForgetPasswordPage