import styles from "./Box.module.scss";

function Box({ header, description, icon }) {
  return (
    <div className={styles.box}>
      <span className={styles.icon}>{icon}</span>
      <p className={styles.header}>{header}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Box;
