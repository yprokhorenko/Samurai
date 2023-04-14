import React, { useState, useEffect } from "react";
import s from "./ProfileInfo.module.css";

      const ProfileStatusWithHooks = (props) => {
        
        let [editMode, setEditMode] = useState(false); //https://youtu.be/EbqQg0K4wbo?t=888
        let [status, setStatus] = useState(props.status)              //https://youtu.be/EbqQg0K4wbo?t=1697 !

      useEffect( () => { //https://youtu.be/P1Y8GFJa_Io?t=324 ! // https://youtu.be/P1Y8GFJa_Io?t=789 about [] //https://youtu.be/P1Y8GFJa_Io?t=1036 useEff general
        setStatus(props.status);
      }, [props.status])

      const activateEditMode = () => {
        setEditMode(true);                           //https://youtu.be/EbqQg0K4wbo?t=1462
      }

      const deactivateEditMode = () => { //https://youtu.be/EbqQg0K4wbo?t=1616
          setEditMode(false);
          props.updateStatus(status); //https://youtu.be/EbqQg0K4wbo?t=1936
      }

      const onStatusChange = (e) => { //https://youtu.be/EbqQg0K4wbo?t=1844
          setStatus(e.currentTarget.value)
      }


  return (
    <div className={s.status}>
      {!editMode && (
        <div> <b>Status</b>: 
          <span
            onDoubleClick={activateEditMode}>
            {props.status || "-"} 
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status} //https://youtu.be/EbqQg0K4wbo?t=1884
             onChange={onStatusChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
//https://youtu.be/P1Y8GFJa_Io?t=958 rules of HOOKS