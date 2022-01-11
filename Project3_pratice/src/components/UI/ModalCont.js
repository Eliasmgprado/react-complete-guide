import styles from "./ModalCont.module.css";

const ModalCont = (props) => {
  return (
    <div className={`${styles.modal} ${props.className}`}>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      <div>{props.children}</div>
    </div>
  );
};

export default ModalCont;
