import styles from "./Banner.module.scss";

function Banner({ img, text }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${img})` }}
    >
      <h2 className={styles.text}>{text}</h2>
    </div>
  );
}

export default Banner;
