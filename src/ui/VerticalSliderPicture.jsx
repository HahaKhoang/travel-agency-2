import styles from "./VerticalSliderPicture.module.scss";

function VerticalSliderPicture({ activeImage, image, index }) {
  const active = activeImage === index - 1;
  console.log(activeImage, index);
  const percentage = index === 0 ? 100 : index * 100;
  const transform = active ? `translateY(-${percentage}%)` : "";
  return (
    <div
      className={`${styles.container} `}
      style={{
        backgroundImage: `url(${image})`,
        // transform: `${active ? "translateY(-100%)" : ""}`,
        // transform: `${active ? "translateY(-100%)" : ""}`,
        transform: `${transform}`,
      }}
    ></div>
  );
}

export default VerticalSliderPicture;
