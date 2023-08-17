import { NavLink } from "react-router-dom";
import styles from "./ExpandingCardItem.module.scss";

function ExpandingCardItem({
  curActive,
  onActive,
  img,
  text,
  num,
  desc,
  icon,
}) {
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
        backgroundImage: `url(${img})`,
      }}
      onClick={handleToggle}
    >
      <div className={`${textActive} ${styles.box}`}>
        <h3 className={styles.header}> {text}</h3>
        <p className={styles.description}>{desc}</p>
        <NavLink className={styles.link}>&rarr; Read more</NavLink>
      </div>
      <div className={iconActive}>{icon}</div>
    </div>
  );
}

export default ExpandingCardItem;
