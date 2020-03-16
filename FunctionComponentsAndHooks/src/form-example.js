import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

 const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "שדה חובה!";
  }

  if (!values.email) {
    errors.email = "שדה חובה";
  } else if (isEmailAddressValid(values.email)) {
    errors.email = " כתובת לא תקינה";
  }

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
    validationSchema: Yup.object({
      firstName: Yup.string().required("שדה חובה!").min(2, "שני תווים לפחות"),
      email: Yup.string().required().email()
    }),
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
          {... formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email}
      </div>
      <button disabled={!formik.isValid} type="submit">Submit</button>
    </form>
  );
};

function isEmailAddressValid(input) {
  return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input);
}

export default SignupForm;
