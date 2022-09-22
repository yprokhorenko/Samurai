import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogsItem = (props) => {
  let path = "/dialogs" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Name1" },
    { id: 2, name: "Name2" },
    { id: 3, name: "Name3" },
    { id: 4, name: "Name4" },
    { id: 5, name: "Name5" },
    { id: 6, name: "Name6" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your course?" },
    { id: 3, message: "Yo" },
  ];

  let dialogsElements = dialogs.map((d) => <DialogsItem name={d.name} id={d.id} />);
  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
          {dialogsElements}
      </div>
      <div className={s.messages}>
          {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
