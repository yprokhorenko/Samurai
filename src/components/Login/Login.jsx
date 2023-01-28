import React from "react";
import { Formik, Form, Field, handleSubmit,useFormik} from 'formik';
import * as Yup from "yup";
import s from './Login.module.css';

const Login = () => {
  return (
    <div  className={s.loginForm}>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  );
};


const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      login: "", 
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: Yup.object({
        login: Yup.string()
        .min(5, "Must be 5 characters or more")
        .max(10, "Must be 10 characters or less")
        .required ("Required"),

        password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .max(15, "Must be 15 characters or less")
        .required ("Required")
    })

  })
  return (
    <div>
      <Formik>
        <form onSubmit={formik.handleSubmit}>
          <div className={s.inputContainer}>
                <input placeholder="Login"
                       name="login" 
                       component="input"
                       onChange={formik.handleChange}
                       value={formik.values.login}
                       onBlur={formik.handleBlur}
                       />
                       {formik.touched.login && formik.errors.login ? <span className={s.stringError}> {formik.errors.login}</span>:null}
          </div>
          <div className={s.inputContainer}>
                <input
                      placeholder="Password"
                      name="password"
                      component="input"
                      onChange={formik.handleChange} 
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      />
                      {formik.touched.password && formik.errors.password ? <span className={s.stringError}> {formik.errors.password}</span>:null}
          </div>
          <div className={s.checkbox}>
                <input type="checkbox"
                      name="rememberMe" 
                      component="input"
                      onChange={formik.handleChange} 
                      value={formik.values.rememberMe}/>
                      remember me
          </div>
                <div>
                  <button type="submit">Login</button>
                </div>
        </form>
      </Formik>
    </div>
  );
}


export default Login;