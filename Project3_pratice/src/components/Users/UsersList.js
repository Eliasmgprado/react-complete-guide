import UserItem from "./UserItem";

import styles from "./UsersList.module.css"

const UsersList = (props) => {
  return (
    <ul className={styles['users-list']}>
      {props.items.map((user) => {
        return (
          <UserItem key={user.id} name={user.name} age={user.age}></UserItem>
        );
      })}
    </ul>
  );
};

export default UsersList;
