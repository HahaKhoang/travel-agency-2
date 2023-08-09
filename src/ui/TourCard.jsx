import styles from "./TourCard.module.scss";
import japaneseFood from "../../public/img/japaneseFood.jpg";
import { RiMapPin2Line, RiRestaurantFill } from "react-icons/ri";

function TourCard() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src={japaneseFood} className={styles.img} />
        <div className={styles.details}>
          <p className={styles.title}>Matcha Mania</p>
          <div className={styles.number}>
            <RiRestaurantFill className={styles.icon} />
            <p> 5 locations</p>
          </div>
          <div className={styles.location}>
            <RiMapPin2Line className={styles.icon} />
            <p> Kyoto, Japan</p>
          </div>
        </div>
        <button className={styles.button}>Book now</button>
      </div>
    </div>
  );
}

export default TourCard;
