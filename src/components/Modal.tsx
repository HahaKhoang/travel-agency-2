import styles from "./Modal.module.scss";
import { RiCloseFill } from "react-icons/ri";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

type ModalProps = {
  onClose: () => void;
  img: string;
  header: string;
  text: string;
  alt: string;
};

function Modal({ onClose, img, header, text, alt }: ModalProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          onClose();
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [onClose]
  );

  return createPortal(
    <div className={styles.container}>
      <div className={styles.box} ref={ref}>
        <button onClick={onClose} className={styles.icon}>
          <RiCloseFill />
        </button>
        <div className={styles["picture-container"]}>
          <img src={img} className={styles.picture} alt={alt} />
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
