import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const formik = useFormik({
    //validateOnMount: true,
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required')
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
          id="firstame"
          name="firstName"
          type="text"
          {...formik.getFieldProps('firstName')}
        />
        {formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null}
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
