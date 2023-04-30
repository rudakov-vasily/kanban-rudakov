import React from "react";
import styles from "./Footer.module.css";
import TaskCounter from "../TaskCounter/TaskCounter";
import Copyright from "../Copyright/Copyright";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.general}>
        <TaskCounter />
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;