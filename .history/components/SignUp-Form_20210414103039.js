//sign up form
import React from 'react'
import { useFormik } from 'formik'

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            
        }
    })
    
}

export default SignUpForm