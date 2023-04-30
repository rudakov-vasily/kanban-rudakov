import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./Main.module.css";
import Lists from "../Lists/Lists";
import NotFound from "../NotFound/NotFound";
import TaskDetails from "../TaskDetails/TaskDetails";

const Main = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.general}>
        <Routes>
          <Route path="/" element={<Lists />}></Route>
          <Route path="/tasks/:id" element={<TaskDetails />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Main;