import React from "react";
import styles from "./TaskCounter.module.css";
import tasks from "../../store/tasks";
import { observer } from "mobx-react-lite";

const TaskCounter = observer(() => {
  return (
    <div className={styles.general}>
      <span>
        Active tasks:{" "}
        {tasks.inProgress.length > 0 ? tasks.inProgress.length : "none"}
      </span>
      <span className={styles.finishedTasks}>
        Finished tasks:{" "}
        {tasks.finished.length > 0 ? tasks.finished.length : "none"}
      </span>
    </div>
  );
});

export default TaskCounter;