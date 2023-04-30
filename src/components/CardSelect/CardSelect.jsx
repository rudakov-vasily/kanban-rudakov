import React from "react";
import styles from "./CardSelect.module.css";
import tasks from "../../store/tasks";
import { observer } from "mobx-react-lite";

const CardSelect = observer((props) => {
  return (
    <div>
      <div
        className={styles.emptyTask}
        onClick={() => props.toogleAddMenu(false)}>
        <img
          src={require("../../img/ui/checkmark.svg").default}
          alt="check mark"
        />
      </div>
      <div className={styles.taskList}>
        {props.choice.map((el) => (
          <div
            className={styles.task}
            key={el.id}
            onClick={() => {
              tasks.chooseCard(el, props.title, props.tasks, props.choice);
              props.toogleAddMenu(false);
            }}>
            {el.name}
          </div>
        ))}
      </div>
    </div>
  );
});

export default CardSelect;