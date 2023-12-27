import styles from "./SurpriseTripTypesContainer.module.scss";
import plane from "../../public/img/undraw/plane.svg";
import roadTrip from "../../public/img/undraw/roadTrip.svg";
import weekend from "../../public/img/undraw/weekend.svg";
import day from "../../public/img/undraw/day.svg";

function SurpriseTripTypesContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles["header-text"]}>
          <p className={styles.main}>Itching to go somewhere different?</p>
          <p className={styles.text}>
            Sometimes changing your scenery is just what you need
          </p>
          <p className={styles.text}>
            Check out the different types of trips we plan
          </p>
        </div>
      </div>
      <div className={styles["trip-container"]}>
        <div className={styles["picture-container"]}>
          <img src={plane} className={styles.picture} />
        </div>
        <div className={styles["text-container"]}>
          <p className={styles.main}>Plane trips</p>
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
          <p className={styles.main}>Road trips</p>
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
          <p className={styles.main}>Weekend Getaways</p>
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
          <p className={styles.main}>Day trips</p>
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
