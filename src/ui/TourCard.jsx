import styles from "./TourCard.module.scss";
import { RiMapPin2Line, RiMap2Line } from "react-icons/ri";

function TourCard({ name, amount, location, img }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["image-container"]}>
          <div className={styles.info}>
            <div className={styles.content}>
              <p className={styles.title}>Matcha Mania</p>
              <div className={styles.amount}>
                <RiMap2Line className={styles.icon} />
                <p>5 locations</p>
              </div>
              <button
                className={styles.button}
                onClick={() => console.log("clicked")}
              >
                Book now
              </button>
            </div>
          </div>
          <img src={img} className={styles.image} />
          <div className={styles.location}>
            <RiMapPin2Line className={styles.icon} />
            <p>Kyoto, Japan</p>
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
