import React from "react";
import { useParams } from "react-router-dom";
import tasks from "../../store/tasks";
import NotFound from "../NotFound/NotFound";
import styles from "./TaskDetails.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const TaskDetails = () => {
  const allTasks = [
    tasks.backlog,
    tasks.ready,
    tasks.inProgress,
    tasks.finished,
  ];
  const { id } = useParams();
  let task = {};
  allTasks.forEach((el) => {
    el.forEach((el) => {
      if (el.id === +id) {
        task = el;
      }
    });
  });

  const [isChanging, setIsChanging] = useState(false);

  const [description, setDescription] = useState(task.description);

  const addDescription = (description) => {
    setDescription(description);
  };

  const changeDescription = () => {
    setIsChanging(true);
  };

  const saveChanges = () => {
    task.description = description;
    localStorage.setItem(`${task.id}`, JSON.stringify(task));
    setIsChanging(false);
  };

  return (
    <div>
      {task === {} ? (
        <NotFound />
      ) : (
        <div className={styles.container}>
          <div className={styles.general}>
            <div className={styles.taskHead}>
              <h2>{task.name}</h2>
              <Link to="/">
                <button className={styles.cross}>
                  <img
                    src={require("../../img/ui/cross.svg").default}
                    alt="close task"
                  />
                </button>
              </Link>
            </div>
            <div className={styles.taskDescription}>
              {isChanging ? (
                <>
                  <input
                    className={styles.input}
                    value={description}
                    onChange={(event) => addDescription(event.target.value)}
                  />
                  <button className={styles.button} onClick={saveChanges}>
                    Save Changes
                  </button>
                </>
              ) : (
                <>
                  <p>{task.description}</p>
                  <button className={styles.button} onClick={changeDescription}>
                    Change description
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
