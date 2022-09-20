import React from "react";
import s from "./Dialogs.module.css";


const Dialogs = (props) => {
    return (
       <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <div className={s.dialog}>Name1</div>
            <div className={s.dialog}>Name2</div>
            <div className={s.dialog}>Name3</div>
            <div className={s.dialog}>Name4</div>
            <div className={s.dialog}>Name5</div>
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