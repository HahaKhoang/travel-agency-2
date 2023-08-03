import styles from "./VerticalSliderPicture.module.scss";

function VerticalSliderPicture({ image }) {
  console.log(image);
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
}

export default VerticalSliderPicture;
