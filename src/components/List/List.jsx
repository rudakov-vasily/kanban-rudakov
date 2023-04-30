import styles from "./List.module.css";
import AddCard from "../AddCard/AddCard";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const List = observer((props) => {
  return (
    <div className={styles.general}>
      <h2 className={styles.heading}>{props.title}</h2>
      {props.tasks.map((el) => (
        <Link className={styles.task} to={`/tasks/${el.id}`} key={el.id}>
          {el.name}
        </Link>
      ))}
      <AddCard title={props.title} tasks={props.tasks} choice={props.choice} />
    </div>
  );
});

export default List;