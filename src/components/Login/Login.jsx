import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./Login.module.css";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


const Login = (props) => {
  if (props.isAuth) return <Navigate to={"/profile/*"} />;
  return (
    <div className={s.loginForm}>
      <h1>LOGIN</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
          messages: null,
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .min(5, "Must be 5 characters or more")
            .max(20, " Max 20 characters ")
            .required("Required"),

          password: Yup.string()
            .min(8, "Must be 8 characters or more")
            .max(20, "Max 20")
            .required("Required"),
        })}
        validateOnBlur

        const onSubmit={(values, { setSubmitting, setStatus, onSubmitProps}) => {
          // debugger;
          props.login(values.email, values.password, values.rememberMe, setStatus);
          setSubmitting(false);
          // onSubmitProps.setSubmitting(false);
          // onSubmitProps.resetForm();
          // console.log(values, props);
        }}
      >
        {({ errors, touched, isValid, dirty, status}) => (
          <Form>
            <div className={s.inputContainer}>  
              <Field
                name="email"
                placeholder="E-mail"
                type="email" /*autoComplete="off"*/
              />
              <div className={s.textError}>
                <ErrorMessage name="email" />
              </div>
           
            </div>
            <div className={s.inputContainer}>
              <Field name="password" placeholder="Password" type="password" />
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
            <div className={s.statusStyle}>{status}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
};


let mapStateToProps = (state) => {
  return {
    isAuth:state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
