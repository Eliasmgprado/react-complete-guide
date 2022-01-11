import Card from "./Card";
import Button from "./Button";
import ModalCont from "./ModalCont";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <ModalCont onConfirm={props.onConfirm}>
      <Card className={styles["modal-card"]}>
        <header className={styles["header"]}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles["body"]}>
          <p>{props.message}</p>
        </div>
        <footer className={styles["actions"]}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </ModalCont>
  );
};

export default ErrorModal;
