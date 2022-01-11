import UserForm from "./UserForm";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
  };

  return (
    <div className={styles["new-user"]}>
      <UserForm onSaveUserData={saveUserDataHandler} />
    </div>
  );
};

export default NewUser;
