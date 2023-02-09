import React from "react";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import s from './Login.module.css';

const Login = (props) => {
  return (
    <div  className={s.loginForm}>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  );
};


const LoginForm = (props) => {
  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      validationSchema={Yup.object({
        login: Yup.string()
          .min(5, "Must be 5 characters or more")
          .max(10, "Must be 10 characters or less")
          .required("Required"),

        password: Yup.string()
          .min(8, "Must be 8 characters or more")
          .max(15, "Must be 15 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, onSubmitProps) => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        console.log(values)
      }}

    >
      <Form>
        <div className={s.inputContainer}>
          <Field name="login" placeholder="Login" autoComplete="off" />
          <div className={s.textError}>
            <ErrorMessage name="login" />
          </div>
        </div>
        <div className={s.inputContainer}>
          <Field name="password" placeholder="Password" autoComplete="off" />
          <div className={s.textError}>
            <ErrorMessage name="password" />
          </div>
        </div>
        <div className={s.checkbox}>
          <Field type="checkbox" name="rememberMe" />
          remember me
          <ErrorMessage name="rememberMe" />
        </div>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default Login;