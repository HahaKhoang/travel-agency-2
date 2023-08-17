import styles from "./TourCard.module.scss";
import { NavLink } from "react-router-dom";

function TourCard({
  mainImage,
  name,
  shortDesc,
  duration,
  type,
  price,
  country,
}) {
  return (
    <div className={styles.container}>
      <img src={mainImage} className={styles.picture} />
      <p className={styles.title}>{name}</p>

      <p className={styles.description}>{shortDesc}</p>
      <div className={styles.extras}>
        <p>Duration: {duration} days </p>
        <p>Category: {type}</p>
      </div>
      <p className={styles.price}>Price: ${price}</p>
      <NavLink className={styles.button}>Let's go to {country}!</NavLink>
    </div>
  );
}

export default TourCard;
