import { NavLink } from "react-router-dom";
import styles from "./InspirationCard.module.scss";
import { RiMapPin2Line } from "react-icons/ri";

type InspirationCardProps = {
  name: string;
  location: string;
  img: string;
  slug: string;
  continent?: string;
};

function InspirationCard({ name, location, img, slug }: InspirationCardProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["image-container"]}>
          <div className={`${styles.info} ${styles.hidden}`}>
            <div className={styles.content}>
              <p className={styles.title}>{name}</p>
              <div className={styles.location}>
                <RiMapPin2Line className={styles.icon} />
                <p>{location}</p>
              </div>
              <NavLink to={`/all-tours/${slug}`} className={styles.button}>
                Read more
              </NavLink>
            </div>
          </div>
          <img src={img} className={styles.image} />
        </div>
      </div>
    </>
  );
}

export default InspirationCard;
