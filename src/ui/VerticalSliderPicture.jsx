import styles from "./VerticalSliderPicture.module.scss";

function VerticalSliderPicture({ activeImage, image, index, clicked }) {
  console.log("activeImage: " + activeImage, "index: " + index);
  const click = clicked ? `translateY(${100 * (index - activeImage)}%)` : "";

  return (
    <div
      // className={`${styles.container} `}
      style={{
        backgroundImage: `url(${image})`,
        transform: `${click}`,
      }}
    ></div>
  );
}

export default VerticalSliderPicture;
