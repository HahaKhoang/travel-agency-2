import { RiArrowDownSLine } from "react-icons/ri";
import styles from "./AccordionItem.module.scss";
import { type ReactNode, useRef } from "react";

type AccordionItemProps = {
  num: number;
  title: string;
  curOpen: number | null;
  onOpen: (arg: number | null) => void;
  children: ReactNode;
};

function AccordionItem({
  num,
  title,
  curOpen,
  onOpen,
  children,
}: AccordionItemProps) {
  const isOpen = num === curOpen;
  const contentEl = useRef<HTMLDivElement | null>(null);

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
        <span className={styles.control}>
          <RiArrowDownSLine
            className={
              isOpen
                ? `${styles.icon} ${styles["rotate-icon"]}`
                : `${styles.icon}`
            }
          />
        </span>
      </button>
      <div
        ref={contentEl}
        className={textOpen}
        style={
          isOpen
            ? { height: contentEl.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className={styles.text}>{children}</div>
      </div>
    </li>
  );
}

export default AccordionItem;
