import React from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Profile from "../Profile/Profile";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.general}>
        <Logo />
        <Profile />
      </div>
    </div>
  );
};

export default Header;