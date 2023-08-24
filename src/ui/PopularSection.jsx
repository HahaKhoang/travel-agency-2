import styles from "./PopularSection.module.scss";
import { usePopularTours } from "../features/tours/usePopularTours";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

function PopularSection() {
  const { popularTours, isLoading } = usePopularTours();

  if (isLoading) return <LoadingSpinner />;

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
              <p className={styles.type}>
                Category:{" "}
                {el.category.charAt(0).toUpperCase() + el.category.slice(1)}
              </p>
            </div>
            <NavLink to={`tours/${el.slug}`} className={styles.button}>
              Read more
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopularSection;
