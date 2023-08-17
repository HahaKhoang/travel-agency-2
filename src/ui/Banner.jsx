import styles from "./Banner.module.scss";

function Banner({ img, text }) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.575),
        rgba(255, 255, 255, 0),
        rgba(0, 0, 0, 0.305)),url(${img})`,
      }}
    >
      <h2 className={styles.text}>{text}</h2>
    </div>
  );
}

export default Banner;
