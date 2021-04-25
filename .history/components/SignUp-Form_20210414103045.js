//sign up form
import React from 'react'
import { useFormik } from 'formik'

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            
        }
    })
    
}

export default SignUpForm