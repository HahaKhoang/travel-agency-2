import styles from "./TourCard.module.scss";
import { RiMapPin2Line, RiMap2Line } from "react-icons/ri";

function TourCard({ name, amount, location, img }) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src={img} className={styles.img} />
        <div className={styles.details}>
          <p className={styles.title}>{name}</p>
          <div className={styles.number}>
            <RiMap2Line className={styles.icon} />
            <p> {amount} locations</p>
          </div>
          <div className={styles.location}>
            <RiMapPin2Line className={styles.icon} />
            <p>{location}</p>
          </div>
        </div>
        <button className={styles.button}>Book now</button>
      </div>
    </div>
  );
}

export default TourCard;
