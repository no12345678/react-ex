import React from "react";
import { useFormik } from "formik";

const validate = values => {
  const errors = {};

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={formik.values.firstName}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

function isEmailAddressValid(input) {
  return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input);
}

export default SignupForm;
