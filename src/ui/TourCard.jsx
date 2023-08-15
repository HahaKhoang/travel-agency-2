import styles from "./TourCard.module.scss";
import bi1 from "../../public/img/bi1.jpg";
import { NavLink } from "react-router-dom";

function TourCard({ img, title, description, duration, type }) {
  return (
    <div className={styles.container}>
      <img src={img} className={styles.picture} />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.extras}>
        <p>Duration: {duration} days</p>
        <p>Type: {type}</p>
      </div>
      <NavLink to="/tours/test1" className={styles.button}>
        Let's go to Japan!
      </NavLink>
    </div>
  );
}

export default TourCard;
