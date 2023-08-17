import { RiArrowDownDoubleLine } from "react-icons/ri";
import styles from "./TourBanner.module.scss";

function TourBanner({ img, title, text }) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.196),
      rgba(40, 40, 40, 0.243)),url(${img})`,
      }}
    >
      <div className={styles.box}>
        <h1 className={styles.title}>{title}</h1>
        <h4>{text}</h4>
      </div>
      <RiArrowDownDoubleLine className={styles.icon} />
    </div>
  );
}

export default TourBanner;
