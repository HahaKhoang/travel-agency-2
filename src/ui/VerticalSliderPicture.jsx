import styles from "./VerticalSliderPicture.module.scss";

function VerticalSliderPicture({ img, title, location, color }) {
  return (
    <div className={styles.container} style={{ backgroundColor: `${color}` }}>
      <div className={styles["picture-container"]}>
        <img src={img} className={styles.picture} />
        <p className={styles.title}>{title}</p>
        <p className={styles.location}>{location}</p>
      </div>
    </div>
  );
}

export default VerticalSliderPicture;
