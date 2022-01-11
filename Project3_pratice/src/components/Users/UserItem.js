import Card from "../UI/Card";
import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <li key={props.key}>
      <Card className={styles["user-item"]}>
          {`${props.name} (${props.age} years old)`}
      </Card>
    </li>
  );
};

export default UserItem;
