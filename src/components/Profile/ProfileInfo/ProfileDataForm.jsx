import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ProfileInfo.module.css";


const ProfileDataForm = ({profile, saveProfile,setStatus,setEditMode,error, ...props}) => {
  return (
    <Formik
    initialValues={profile || {
        fullName: "",
        lookingForAJob: false,
        lookingForAJobDescription: "",
        AboutMe: "",
    }} 
    // enableReinitialize
    // validationSchema={Yup.object({
    //   full_name: Yup.string()
    //     .min(5, "Must be 5 characters or more")
    //     .max(20, " Max 20 characters ")
    //     .required("Required"),

    //     my_skills: Yup.string()
    //     .min(8, "Must be 8 characters or more")
    //     .max(20, "Max 20")
    //     .required("Required"),
    // })}
    // validateOnBlur

     const onSubmit = {(values, {setStatus}) => { //https://youtu.be/-tDhjScH_0s?t=2078
      // debugger;
      saveProfile(values);
      console.log(values); 
      // setEditMode(false); //https://youtu.be/-tDhjScH_0s?t=2911
//       // setSubmitting(false);
//       // onSubmitProps.setSubmitting(false);
   }}
  >
    {({ error}) => (
      <Form >
      <button type="submit" >Save</button>          <p className={s.contactsErrStyle}>{error}</p> 
        <div className={s.profileDataInput}> <b>Full name:</b><br/>  
          <Field name="fullName" placeholder="Full name" type="text" autoComplete="off" />
          <ErrorMessage name="fullName" />
        </div>
        <div className={s.profileDataInput}> <b>Looking For A Job:</b><br/>  {profile.lookingForAJob ? "yes" : "no"}
          <Field name="lookingForAJob" type="checkbox" /*autoComplete="off"*/ />
          <div className={s.textError}>
            <ErrorMessage name="lookingForAJob" />
          </div>
        </div>

        <div className={s.profileDataInput}> <b>My skills:</b><br/>  
          <Field name="lookingForAJobDescription" placeholder="My skills" as={"textarea"} /*autoComplete="off"*/ />
          <div className={s.textError}>
            <ErrorMessage name="lookingForAJobDescription" />
          </div>
        </div>

        <div className={s.profileDataInput}> <b>About Me:</b><br/>  
          <Field name="aboutMe" placeholder="About Me" as={"textarea"} /*autoComplete="off"*/ />
          <div className={s.textError}>
            <ErrorMessage name="aboutMe" />
          </div>
        </div>

        <div >
          <b>Contacts</b>:  {Object.keys(profile.contacts).map(key => { //https://youtu.be/-tDhjScH_0s?t=3196
           return  <div key={key}>  
                        <div >{key} : <Field name={'contacts.' + key} placeholder={key}  />

                             
                        </div>  
                               
                   </div>})}    

        </div>



      </Form>
    )}
  </Formik>
  );
};

export default ProfileDataForm;
