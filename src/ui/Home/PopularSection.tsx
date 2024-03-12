import styles from "./PopularSection.module.scss";
import { usePopularTours } from "../../features/tours/usePopularTours.tsx";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner.tsx";
import { useDispatch } from "react-redux";
import { addTour } from "../../store/tourSlice.tsx";

function PopularSection() {
  const { popularTours, isLoading } = usePopularTours();
  const dispatch = useDispatch();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={styles.container}>
      {popularTours?.map((el, i) => (
        <div className={styles["rank-container"]} key={i}>
          <div className={styles["picture-container"]}>
            <NavLink
              to={`all-tours/${el.slug}`}
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
              <img src={el.imageWelcome} className={styles.picture} />
            </NavLink>
          </div>
          <div className={styles["text-container"]}>
            <div className={styles["text-detail"]}>
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
              <NavLink
                to={`all-tours/${el.slug}`}
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopularSection;
