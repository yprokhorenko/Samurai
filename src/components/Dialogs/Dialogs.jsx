import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">Name1</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Name2</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Name3</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Name4</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Name5</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.dialog}>Hi</div>
        <div className={s.dialog}>How is your progress?</div>
        <div className={s.dialog}>Yoo</div>
      </div>
    </div>
  );
};

export default Dialogs;
