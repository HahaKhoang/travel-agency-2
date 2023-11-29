import { NavLink } from "react-router-dom";
import styles from "./InspirationCard.module.scss";
import { RiMapPin2Line } from "react-icons/ri";

function TourCard({ name, location, img, slug }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["image-container"]}>
          <div className={styles.info}>
            <div className={styles.content}>
              <p className={styles.title}>{name}</p>
              <NavLink to={`/all-tours/${slug}`} className={styles.button}>
                Read more
              </NavLink>
            </div>
          </div>
          <img src={img} className={styles.image} />
          <div className={styles.location}>
            <RiMapPin2Line className={styles.icon} />
            <p>{location}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourCard;
