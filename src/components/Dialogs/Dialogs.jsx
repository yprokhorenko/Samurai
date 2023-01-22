import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import Login from "../Login/Login";
import {reduxForm, Field} from "redux-form";


const Dialogs = (props) => {
      let state = props.dialogsPage;

      let dialogsElements = state.dialogs.map((d) => <DialogsItem name={d.name} id={d.id} />);
      let messagesElements = state.messages.map((m) => <Message message={m.message} />);
      let newMessageBody = state.newMessageBody;

      let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
      }

    if (!props.isAuth) return <Navigate to={"/Login"}/>;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
          {dialogsElements}
      </div>
      <div className={s.messages}>
          <div>{messagesElements}</div>
          <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newMessageBody"
          placeholder="Enter your message"
        ></Field>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm);

export default Dialogs;
