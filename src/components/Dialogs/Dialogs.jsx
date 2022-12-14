import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import Login from "../Login/Login";


const Dialogs = (props) => {
      let state = props.dialogsPage;

      let dialogsElements = state.dialogs.map((d) => <DialogsItem name={d.name} id={d.id} />);
      let messagesElements = state.messages.map((m) => <Message message={m.message} />);
      let newMessageBody = state.newMessageBody;

      let onSendMessageClick = () => {
        props.sendMessage();
      };
      let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
      };

    if (!props.isAuth) return <Navigate to={"/Login"}/>;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
          {dialogsElements}
      </div>
      <div className={s.messages}>
          <div>{messagesElements}</div>
          <div>
            <div><textarea 
                  onChange={onNewMessageChange}
                  value={newMessageBody} 
                  placeholder = "Enter your message">
                </textarea></div>
            <div><button onClick={onSendMessageClick}>Send</button></div>
          </div>
      </div>
    </div>
  );
};

export default Dialogs;
