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
        <div>
          <h1>Validated Login Form</h1>
	      <form onSubmit={handleSubmit}>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Enter your email"
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />

      <button type="submit" disabled={isSubmitting}>
        Login
      </button>

    </form>
        </div>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
