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
  password: Yup.string().required("Password required")
});

const UserEntry = ({}) => (
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
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          {/* <ErrorMessage name="firstName" /> */}

          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          {/* <ErrorMessage name="lastName" /> */}

          <Field name="dob" type="date" />
          {errors.dob && touched.dob ? <div>{errors.dob}</div> : null}
          {/* <ErrorMessage name="dob" /> */}

          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          {/* <ErrorMessage name="email" /> */}

          <Field name="password" type="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          {/* <ErrorMessage name="password" /> */}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default UserEntry;
