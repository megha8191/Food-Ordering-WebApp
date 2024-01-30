import React from 'react';
import { useFormik } from 'formik';

const Login = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="innerMain form-width">
    <form onSubmit={formik.handleSubmit}>
        <div className='mb-3'>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        className="form-control"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      </div>
      <div className='mb-3'>
      <label htmlFor="email">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        className="form-control"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      </div>

      <button type="submit" className='btn-theme'>Submit</button>
    </form>
    </div>
  );
};
export default Login;