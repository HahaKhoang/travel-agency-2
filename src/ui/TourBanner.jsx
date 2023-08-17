import styles from "./TourBanner.module.scss";
import kyoto from "../../public/img/kyoto.jpg";

function TourBanner() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.381),
      rgba(78, 78, 78, 0.062),
      rgba(0, 0, 0, 0.465)),url(${kyoto})`,
      }}
    >
      <div className={styles.box}>
        <h1 className={styles.title}>Tour Name</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          officia nisi ea porro quisquam praesentium dignissimos nam aspernatur
          aliquid neque.
        </h4>
      </div>
    </div>
  );
}

export default TourBanner;
