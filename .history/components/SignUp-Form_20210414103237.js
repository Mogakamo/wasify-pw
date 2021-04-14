//sign up form
import React from 'react'
import { useFormik } from 'formik'

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            Vpassword: "",
        },
        onSubmit: () => {
            console.log();
        }
    })
    return(
        <>
          <form onSubmit={}>
              
          </form>
        </>
    )
    
}

export default SignUpForm