import { useNavigate } from "react-router-dom";
import styles from "./SingleTourBookNow.module.scss";

function SingleTourBookNow({ duration, price, cities, category, slug }) {
  const navigate = useNavigate();

  function onClick(e) {
    e.preventDefault();
    navigate(`/booking/${slug}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles["details-container"]}>
        <div className={styles["details-center"]}>
          <div className={styles.details}>
            <p className={styles.label}>Duration of</p>
            <p className={styles.text}>{duration} days</p>
          </div>
          <div className={styles.details}>
            <p className={styles.label}>Prices starting from</p>
            <p className={styles.text}>${price}</p>
          </div>
          <div className={styles.details}>
            <p className={styles.label}>Cities include</p>
            {cities.map((el, i) => (
              <span key={i} className={styles.text}>
                {el}
              </span>
            ))}
          </div>
          <div className={styles.details}>
            <p className={styles.label}>Type of tour</p>
            <p className={styles.text}>{category}</p>
          </div>
          <div className={styles.details}>
            <p className={styles.label}>*Customizations available</p>
          </div>
        </div>
      </div>
      <div className={styles["about-container"]}>
        <p className={styles.about}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quidem
          quam harum animi, tenetur vel ullam similique culpa cumque fuga
          distinctio adipisci tempore inventore non? Excepturi omnis praesentium
          ratione laborum.
        </p>
        <button onClick={onClick} className={styles.button}>
          Book now
        </button>
      </div>
    </div>
  );
}

export default SingleTourBookNow;
