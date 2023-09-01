import styles from "./Modal.module.scss";
import contactModal from "../../public/img/undraw/contactModal.svg";
import { RiCloseFill } from "react-icons/ri";

function Modal({ onClose }) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <button onClick={onClose} className={styles.icon}>
          <RiCloseFill />
        </button>
        <div className={styles["picture-container"]}>
          <img src={contactModal} className={styles.picture} />
        </div>
        <div className={styles["text-container"]}>
          <h2 className={styles.header}>Thank you for contacting us</h2>
          <p className={styles.text}>We will respond as soon as we can</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
