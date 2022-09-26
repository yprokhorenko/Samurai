import React from "react";
import s from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={s.friendItem}>
      <img
        className={s.itemPicture}
        src="https://picsum.photos/150/150"
        alt=""
      />
      <div className={s.friendName} >{props.name}</div>
    </div>
  );
};

export default Friend;
