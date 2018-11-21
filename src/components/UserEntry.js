import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First name required"),
  lastName: Yup.string().required("Last name required"),
  dob: Yup.date().required("Date of birth required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password required")
});

const UserEntry = ({ sendRegisterUserInfo, history }) => (
  <div>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        password: ""
      }}
      validationSchema={signUpSchema}
      onSubmit={values => {
        sendRegisterUserInfo(values);
        history.push("/login");
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <h2>First Name</h2>
          <Field name="firstName" />

          <ErrorMessage name="firstName" />

          <h2>Last Name</h2>
          <Field name="lastName" />

          <ErrorMessage name="lastName" />

          <h2>DOB</h2>
          <Field name="dob" type="date" />

          <ErrorMessage name="dob" />

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
