import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  let newMessageBody = state.newMessageBody;
  // let addNewMessage = (values) => {
  //   props.sendMessage(values.newMessageBody);
  // };
  if (!props.isAuth) return <Navigate to={"/Login"} />; //https://youtu.be/_X3dVadZp2U?t=364

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <AddMessageForm sendMessage={props.sendMessage} />
        </div>
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
      // let addNewMessage = (values) => {
      //   props.sendMessage(values);
      // };
  return (
    <Formik
      initialValues={{ newMessageBody: "" }}
      validationSchema={Yup.object({
        newMessageBody: Yup.string()
          .min(1, "Must be 1 characters or more")
          .max(200, "Must be 200 characters or less")
          .required("")
      })}
      // onSubmit={(values, {resetForm}) => {
      //   addNewMessage(values.newMessageBody);
      //   resetForm({values:""});
      //   console.log(values)
      // }}
      onSubmit={(values, onSubmitProps) => {
        // onSubmitProps.setSubmitting(false);
        // addNewMessage(values.newMessageBody); this instead of lower line - interesting effect
        props.sendMessage(values.newMessageBody); 
        console.log(values);
        onSubmitProps.resetForm();
      }}
    >
      <Form>
        <div>
            <Field
              as={"textarea"}
              name={"newMessageBody"}
              placeholder={"Enter your message"}
            />
            <div className={s.textError}>
              <ErrorMessage name="newMessageBody" />
            </div>
        </div>
        <div className={s.btnSubmit}>
          <button type="submit">Send</button>
        </div>
      </Form>
    </Formik>
  );
};
export default Dialogs;