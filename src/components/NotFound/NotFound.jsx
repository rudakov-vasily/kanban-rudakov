import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.general}>
      <p>
        Page not found. Return{" "}
        <Link className={styles.link} to="/">
          home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;