import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
// import Friends from "./Friends/Friends";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? s.active : s.link)}>Profile</NavLink>
      </div>
      <div className={s.item}>
          <NavLink to="/dialogs" className={({ isActive }) => (isActive ? s.active : s.link)}>Messages</NavLink>
      </div>
      <div className={s.item}>
          <a href="#">News</a>  
      </div>
      <div className={s.item}>
          <a href="#">Music</a>
      </div>
      <div className={s.item}>
          <a href="#">Settings</a> 
      </div>
      {/* <Friends /> */}
    </nav>
  );
};
export default Navbar;
