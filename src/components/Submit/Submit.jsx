import React from "react";
import styles from "./Submit.module.css";
import tasks from "../../store/tasks";
import { observer } from "mobx-react-lite";

const Submit = observer((props) => {
  return (
    <div className={styles.general}>
      <input
        className={styles.input}
        placeholder="Enter task name"
        value={tasks.taskName}
        onChange={(event) => {
          tasks.setTaskName(event.target.value);
        }}
      />
      <button
        className={styles.button}
        onClick={() => {
          tasks.addCard(tasks.taskName);
          props.toogleAddMenu(false);
        }}>
        Submit
      </button>
    </div>
  );
});

export default Submit;