import styles from "./AccordionItem.module.scss";
import { useRef } from "react";

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  const contentEl = useRef();

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  const itemOpen = isOpen
    ? `${styles["accordion-item"]} ${styles.active}`
    : `${styles["accordion-item"]}`;
  const textOpen = isOpen
    ? `${styles["text-box"]} ${styles.open}`
    : `${styles["text-box"]}`;

  return (
    <li className={itemOpen}>
      <button className={styles.button} onClick={handleToggle}>
        <span className={styles.number}>
          {num < 9 ? `0${num + 1}` : num + 1}
        </span>
        <span className={styles.title}>{title}</span>
        <span className={styles.control}>{isOpen ? "-" : "+"}</span>
      </button>
      <div
        ref={contentEl}
        className={textOpen}
        style={
          isOpen
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className={styles.text}>{children}</div>
      </div>
    </li>
  );
}

export default AccordionItem;

// return (
//   <div className={itemOpen} onClick={handleToggle}>
//     <p className={styles.number}>{num < 9 ? `0${num + 1}` : num + 1}</p>
//     <p className={styles.title}>{title}</p>
//     <p className={styles.icon}>{isOpen ? "-" : "+"}</p>
//     {isOpen && <div className={styles["content-box"]}>{children}</div>}
//   </div>
// );
