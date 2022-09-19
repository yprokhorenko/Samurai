import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

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
    </nav>
  );
};

export default Navbar;
