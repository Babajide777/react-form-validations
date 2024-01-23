import React from "react";
import { Form, Field } from "react-final-form";
import "../styles/css/reactFinalForm.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 500);
};

const ReactFinalForm = () => (
  <div className="react-final-form">
    <h2>React Final Form</h2>
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        console.log(values);
        if (!values.username) {
          errors.username = "User name is required";
        }
        if (values.username && values.username.length < 2) {
          errors.username = "Username must be more than 2 characters";
        }
        if (!values.password) {
          errors.password = "Password is required";
        }
        if (values.password && values.password.length < 8) {
          errors.password = "Password must be more than 8 characters";
        }
        return errors;
      }}
      render={({ submitError, handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field name="username">
            {({ input, meta }) => (
              <div>
                <label>Username</label>
                <input {...input} type="text" placeholder="Username" />
                {(meta.error || meta.submitError) && meta.touched && (
                  <span className="field-error">
                    {meta.error || meta.submitError}
                  </span>
                )}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input {...input} type="password" placeholder="Password" />
                {meta.error && meta.touched && (
                  <span className="field-error">{meta.error}</span>
                )}
              </div>
            )}
          </Field>
          {submitError && <div className="error">{submitError}</div>}
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Log In
            </button>
          </div>
        </form>
      )}
    />
  </div>
);

export default ReactFinalForm;
