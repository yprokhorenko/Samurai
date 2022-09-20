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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogsItem name="Name1" id="1" />
        <DialogsItem name="Name2" id="2" />
        <DialogsItem name="Name3" id="3" />
        <DialogsItem name="Name4" id="4" />
        <DialogsItem name="Name5" id="5" />
        <DialogsItem name="Name6" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How is your course?" />
        <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
