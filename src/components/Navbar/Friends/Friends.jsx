import React from "react";
import s from "./Friends.module.css";
import Friend from "./Friend/Friend";


const Friends = (props) => {
  let friendElement = props.store.state.navFriends.navFriends.map((elem) => (<Friend name={elem.name} /> ));
  return (
    <div className={s.friendsBlock}>
      <div className={s.friendsTitle}>Friends</div>
      <span>{friendElement}</span>
    </div>
  );
};

export default Friends;
