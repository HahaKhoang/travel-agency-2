import styles from "./Banner.module.scss";

function Banner({ img, text }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${img})` }}
    >
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default Banner;
