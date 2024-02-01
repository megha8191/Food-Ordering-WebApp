import React from 'react';
import { Formik  } from 'formik';

const Login = () => (
  <div className='innerMain'>
    <h1>Form Anywhere!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = <p className='error'>Required</p>;
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = <p className='error'>Required</p>;
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label>email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            className='form-control'
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <label>password</label>
          <input
            type="password"
            name="password"
            className='form-control'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" className='btn-theme' disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Login;