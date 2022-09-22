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

  let dialogData = [
    { id: 1, name: "Name1" },
    { id: 2, name: "Name2" },
    { id: 3, name: "Name3" },
    { id: 4, name: "Name4" },
    { id: 5, name: "Name5" },
    { id: 6, name: "Name6" },
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your course?" },
    { id: 3, message: "Yo" },
  ];



  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogsItem name={dialogData[0].name} id={dialogData[0].id}/>
        <DialogsItem name={dialogData[1].name} id={dialogData[1].id}/>
        <DialogsItem name={dialogData[2].name} id={dialogData[2].id}/>
        <DialogsItem  />
        <DialogsItem  />
        <DialogsItem  />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
