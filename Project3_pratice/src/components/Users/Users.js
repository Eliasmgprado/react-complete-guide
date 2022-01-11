import Card from "../UI/Card";
import UsersList from "./UsersList";

import styles from "./Users.module.css";

const Users = (props) => {
  return (
    <Card className={styles.users}>
      <UsersList items={props.items}></UsersList>
    </Card>

  );
};

export default Users;
