import React, { useState } from 'react'
import Head from 'next/head'

const ForgetPasswordPage = () => {
    const [msg, setMsg] = useState({ message: '', isError: false })

    async function handleSubmit(e) {
        e.prevent
    }
}

export default ForgetPasswordPage