import styles from "./InspirationCard.module.scss";
import { RiMapPin2Line } from "react-icons/ri";

function TourCard({ name, location, img, value }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["image-container"]}>
          <div className={styles.info}>
            <div className={styles.content}>
              <p className={styles.title}>{name}</p>
              <button
                className={styles.button}
                onClick={() => console.log("clicked")}
              >
                Read more
              </button>
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

{
  /* <div className={styles.box}>
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
      </div> */
}
