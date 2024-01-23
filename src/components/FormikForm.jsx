import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/css/formikForm.css";

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Enter your email"),
  firstName: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .required("Enter your first name"),
  lastName: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .required("Eneter your last name"),
});

const FormikForm = () => (
  <div className="formik-form">
    <h2>Formik</h2>
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      render={({ errors, touched }) => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" placeholder="Jane" type="text" />
          <ErrorMessage
            name="firstName"
            component="div"
            className="field-error"
          />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" placeholder="Doe" type="text" />
          <ErrorMessage name="lastName">
            {(msg) => <div className="field-error">{msg}</div>}
          </ErrorMessage>

          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="jane@acme.com" type="email" />
          <ErrorMessage name="email" className="field-error">
            {(msg) => <div className="field-error">{msg}</div>}
          </ErrorMessage>

          <button type="submit">Submit</button>
        </Form>
      )}
    />
  </div>
);

export default FormikForm;
