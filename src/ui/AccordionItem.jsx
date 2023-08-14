import styles from "./AccordionItem.module.scss";

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  const itemOpen = isOpen ? `${styles.item} ${styles.open}` : `${styles.item}`;
  return (
    <div className={itemOpen} onClick={handleToggle}>
      <p className={styles.number}>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.icon}>{isOpen ? "-" : "+"}</p>
      {isOpen && <div className={styles["content-box"]}>{children}</div>}
    </div>
  );
}

export default AccordionItem;
