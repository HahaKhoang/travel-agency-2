import styles from "./Box.module.scss";

function Box({ header, description, img }) {
  return (
    <div className={styles.box}>
      <img src={img} className={styles.image} />
      <p className={styles.header}>{header}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Box;
