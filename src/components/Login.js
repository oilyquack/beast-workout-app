import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Sign in with the email you provided"),
  password: Yup.string()
    .min(8, "Your password should be at least 8 characters long")
    .required("Password required")
});

const UserEntry = ({ sendLoginUserInfo, history, loggedIn }) => (
  <div>
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={loginSchema}
      onSubmit={values => {
        sendLoginUserInfo(values);
        history.push("/sessions");
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <h2>Email</h2>
          <Field name="email" type="email" />

          <ErrorMessage name="email" />

          <h2>Password</h2>
          <Field name="password" type="password" />

          <ErrorMessage name="password" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default UserEntry;
