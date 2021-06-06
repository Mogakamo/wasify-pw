import React from 'react'
import Head from 'next/head'
import Link from 'next/link'


const Register = () => {
    return (
        <>
            <div>
                <Head>
                    <title>Wasify - Sign Up</title>
                </Head>


                <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
                    <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
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