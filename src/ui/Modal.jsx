import styles from "./Modal.module.scss";
import contactModal from "../../public/img/undraw/contactModal.svg";
import { RiCloseFill } from "react-icons/ri";
import { createPortal } from "react-dom";

function Modal({ onClose, img, header, text }) {
  return createPortal(
    <div className={styles.container}>
      <div className={styles.box}>
        <button onClick={onClose} className={styles.icon}>
          <RiCloseFill />
        </button>
        <div className={styles["picture-container"]}>
          <img src={img} className={styles.picture} />
        </div>
        <div className={styles["text-container"]}>
          <h3 className={styles.header}>{header}</h3>
          <p className={styles.text}>{text}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
