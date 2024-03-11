import styles from "./ExpandingCardItem.module.scss";
import { NavLink } from "react-router-dom";
import { type ReactNode } from "react";

type ExpandingCardItemsProps = {
  img: string;
  text: string;
  key: string;
  num: number;
  desc: string;
  icon: ReactNode;
  link: string;
  curActive: number;
  onActive: (num: number) => void;
};

function ExpandingCardItem({
  curActive,
  onActive,
  img,
  text,
  num,
  desc,
  icon,
  link,
}: ExpandingCardItemsProps) {
  const isOpen = num === curActive;

  function handleToggle() {
    onActive(num);
  }

  const active = `${isOpen ? styles.active : ""}`;
  const textActive = `${isOpen ? styles.textActive : ""}`;
  const iconActive = `${isOpen ? styles.icon : styles.iconActive}`;

  return (
    <div
      className={`${styles.panel} ${active}`}
      style={{
        backgroundImage: `linear-gradient(
      
        rgba(255, 255, 255, 0),
        rgba(53, 53, 53, 0.443)), url(${img})`,
      }}
      onClick={handleToggle}
    >
      <div className={`${textActive} ${styles.box}`}>
        <h3 className={styles.header}> {text}</h3>
        <p className={styles.description}>{desc}</p>
        <NavLink to={link} className={styles.link}>
          &rarr; Read more
        </NavLink>
      </div>
      <div className={iconActive}>{icon}</div>
    </div>
  );
}

export default ExpandingCardItem;
