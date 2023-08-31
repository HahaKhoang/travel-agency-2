import styles from "./SurpriseTripTypesContainer.module.scss";
import plane from "../../public/img/undraw/plane.svg";
import roadTrip from "../../public/img/undraw/roadTrip.svg";
import weekend from "../../public/img/undraw/weekend.svg";
import day from "../../public/img/undraw/day.svg";

function SurpriseTripTypesContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Trip types header</div>
      <div className={styles["trip-container"]}>
        <div className={styles["picture-container"]}>
          <img src={plane} className={styles.picture} />
        </div>
        <div className={styles["text-container"]}>
          <h2>Plane trips</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
        </div>
      </div>
      <div className={styles["trip-container-2"]}>
        <div className={styles["text-container-2"]}>
          <h2>Road trips</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
        </div>
        <div className={styles["picture-container-2"]}>
          <img src={roadTrip} className={styles.picture} />
        </div>
      </div>
      <div className={styles["trip-container"]}>
        <div className={styles["picture-container"]}>
          <img src={weekend} className={styles.picture} />
        </div>
        <div className={styles["text-container"]}>
          <h2>Weekend Getaways</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
        </div>
      </div>
      <div className={styles["trip-container-2"]}>
        <div className={styles["text-container-2"]}>
          <h2>Day trips</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
        </div>
        <div className={styles["picture-container-2"]}>
          <img src={day} className={styles.picture} />
        </div>
      </div>
    </div>
  );
}

export default SurpriseTripTypesContainer;
