import styles from "./PopularSection.module.scss";
import fuji from "../../public/img/japan/fuji.jpg";
import dango from "../../public/img/japan/dango.jpg";
import kyoto from "../../public/img/japan/kyoto.jpg";
import { usePopularTours } from "../features/tours/usePopularTours";

function PopularSection() {
  const { popularTours } = usePopularTours();
  console.log(popularTours);

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
      {/* <div className={styles["rank-container"]}>
        <div className={styles["picture-container"]}>
          <img src={kyoto} className={styles.picture} />
        </div>
        <div className={styles["text-container"]}>
          <h3 className={styles.title}>Cultural Kyoto</h3>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            sed laborum doloremque ea facilis dolore{" "}
          </p>
          <div className={styles.extra}>
            <p className={styles.duration}>Duration: 6 days</p>
            <p className={styles.type}>Category: culture</p>
          </div>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
      <div className={styles["rank-container"]}>
        <div className={styles["picture-container"]}>
          <img src={fuji} className={styles.picture} />
        </div>
        <div className={styles["text-container"]}>
          <h3 className={styles.title}>Climb Mt. Fuji</h3>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            sed laborum doloremque ea facilis dolore{" "}
          </p>
          <div className={styles.extra}>
            <p className={styles.duration}>Duration: 2 days</p>
            <p className={styles.type}>Category: nature</p>
          </div>
          <button className={styles.button}>Read more</button>
        </div>
      </div> */}
      {/* <div className={styles["rank-container"]}>
        <img src={kyoto} className={styles["rank-picture"]} />
        <h3 className={styles.title}>Cultural Kyoto</h3>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          sed laborum doloremque ea facilis dolore{" "}
        </p>
        <div className={styles.extra}>
          <p className={styles.duration}>Duration: 5 days</p>
          <p className={styles.type}>Category: culture</p>
        </div>
        <button className={styles.button}>Read more</button>
      </div>
      <div className={styles["rank-container"]}>
        <img src={fuji} className={styles["rank-picture"]} />
        <h3 className={styles.title}>Climb Mt. Fuji</h3>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          sed laborum doloremque ea facilis dolore{" "}
        </p>
        <div className={styles.extra}>
          <p className={styles.duration}>Duration: 5 days</p>
          <p className={styles.type}>Category: culture</p>
        </div>
        <button className={styles.button}>Read more</button>
      </div> */}
    </div>
  );
}

export default PopularSection;
