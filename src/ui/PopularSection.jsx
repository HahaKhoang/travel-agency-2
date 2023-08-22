import styles from "./PopularSection.module.scss";
import fuji from "../../public/img/fuji.jpg";
import dango from "../../public/img/dango.jpg";
import kyoto from "../../public/img/kyoto.jpg";

function PopularSection() {
  return (
    <div className={styles.container}>
      <div className={styles["rank-container"]}>
        <div className={styles["picture-container"]}>
          <img src={dango} className={styles.picture} />
        </div>
        <div className={styles["text-container"]}>
          <h3 className={styles.title}>Eat through Japan</h3>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            sed laborum doloremque ea facilis dolore{" "}
          </p>
          <div className={styles.extra}>
            <p className={styles.duration}>Duration: 5 days</p>
            <p className={styles.type}>Category: food</p>
          </div>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
      <div className={styles["rank-container"]}>
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
      </div>
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
