import React from "react";
import styles from"./Navbar.module.css"
import { NavLink } from "react-router-dom";       <<<<<<<<<<<

const Navbar = () =>{
    return <nav className={styles.nav}>
    <div className={styles.item}>
      <NavLink to="/profile" style={({ isActive }) => ({color: isActive ? 'gold' : '#fff', background: isActive ? '' : '',})}>Profile</NavLink>      <<<<<<
    </div>

    <div className={styles.item}>
      <a>Messages</a>
     </div>

     <div className={styles.item}>
      <a>News</a>
     </div>

     <div className={styles.item}>
      <a>Music</a>
     </div>

     <div className={styles.item}>
      <a>Settings</a>
     </div>
  </nav>
}

 export default Navbar;
