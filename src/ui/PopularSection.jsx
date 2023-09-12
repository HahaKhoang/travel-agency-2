import styles from "./PopularSection.module.scss";
import { usePopularTours } from "../features/tours/usePopularTours";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { useDispatch } from "react-redux";
import { addTour } from "../features/tours/tourSlice";

function PopularSection() {
  const { popularTours, isLoading } = usePopularTours();
  const dispatch = useDispatch();

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
              <p className={styles.duration}>
                Duration: {el.duration} {el.duration < 2 ? "day" : "days"}
              </p>
              <p className={styles.type}>
                Category:{" "}
                {el.category.charAt(0).toUpperCase() + el.category.slice(1)}
              </p>
            </div>
          </div>
          <NavLink
            to={`tours/${el.slug}`}
            className={styles.button}
            onClick={() => {
              const tour = {
                id: el.id,
                name: el.tourName,
                slug: el.slug,
                price: el.price,
                duration: el.duration,
                totalPrice: el.price,
              };
              dispatch(addTour(tour));
            }}
          >
            Read more
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default PopularSection;
