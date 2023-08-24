import styles from "./PopularSection.module.scss";
import { usePopularTours } from "../features/tours/usePopularTours";

function PopularSection() {
  const { popularTours } = usePopularTours();

  return (
    <div className={styles.container}>
      {popularTours.map((el, i) => (
        <div className={styles["rank-container"]} key={i}>
          <div className={styles["picture-container"]}>
            <img src={el.imageWelcome} className={styles.picture} />
          </div>
          <div className={styles["text-container"]}>
            <h3 className={styles.title}>{el.tourName}</h3>

            <p className={styles.description}>{el.welcomeDesc}</p>
            <div className={styles.extra}>
              <p className={styles.duration}>Duration: {el.duration} days</p>
              <p className={styles.type}>Category: {el.category}</p>
            </div>
            <button className={styles.button}>Read more</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopularSection;
