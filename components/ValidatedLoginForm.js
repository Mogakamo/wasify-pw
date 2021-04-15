import React from "react";

import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
	validate={values => {
  let errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!EmailValidator.validate(values.email)) {
    errors.email = "Invalid email address.";
  }

  const passwordRegex = /(?=.*[0-9])/;
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 characters long.";
  } else if (!passwordRegex.test(values.password)) {
    errors.password = "Invalid password. Must contain one number.";
  }

  return errors;
}}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <div >
	      <form onSubmit={handleSubmit}>
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
	<div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">      
	<h1 className="mb-8 text-3xl text-center">Login</h1>      
     
      <input
        id="email"
        name="email"
        type="text"
	className="block border border-grey-light w-full p-3 rounded mb-4"
        placeholder="Enter your email"
	value={values.email}
	onChange={handleChange}
	onBlur={handleBlur}
	className={errors.email && touched.email && "error"}
      />
	      {errors.email && touched.email && (
		<div className="input-feedback">{errors.email}</div>
	      )}

     
      <input
        id="password"
        name="password"
        type="password"
	className="block border border-grey-light w-full p-3 rounded mb-4"
        placeholder="Enter your password"
	value={values.password}
	onChange={handleChange}
	onBlur={handleBlur}
	className={errors.password && touched.password && "error"}
      />
	      {errors.password && touched.password && (
		<div className="input-feedback">{errors.password}</div>
	      )}

      <button type="submit" disabled={isSubmitting}
		className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
	      >
        Login
      </button>
	</div>
       </div>
      </div>
    </form>
        </div>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
