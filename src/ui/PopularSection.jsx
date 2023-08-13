import styles from "./PopularSection.module.scss";
import fuji from "../../public/img/fuji.jpg";
import dango from "../../public/img/dango.jpg";
import kyoto from "../../public/img/kyoto.jpg";

function PopularSection() {
  return (
    <div className={styles.container}>
      <div className={styles["rank-container-secondary"]}>
        <p className={styles.rank}>#2</p>
        <img src={dango} className={styles["rank-secondary"]} />
        <p className={styles.title}>Eat through Japan</p>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          sed laborum doloremque ea facilis dolore{" "}
        </p>
        <div className={styles.extra}>
          <p className={styles.duration}>Duration: 5 days</p>
          <p className={styles.type}>Type: culture</p>
        </div>
        <button className={styles.button}>Read more</button>
      </div>
      <div className={styles["rank-container-primary"]}>
        <p className={styles.rank}>#1</p>
        <img src={kyoto} className={styles["rank-primary"]} />
        <p className={styles.title}>Cultural Kyoto</p>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          sed laborum doloremque ea facilis dolore{" "}
        </p>
        <div className={styles.extra}>
          <p className={styles.duration}>Duration: 5 days</p>
          <p className={styles.type}>Type: culture</p>
        </div>
        <button className={styles.button}>Read more</button>
      </div>
      <div className={styles["rank-container-secondary"]}>
        <p className={styles.rank}>#3</p>
        <img src={fuji} className={styles["rank-secondary"]} />
        <p className={styles.title}>Climb Mt. Fuji</p>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          sed laborum doloremque ea facilis dolore{" "}
        </p>
        <div className={styles.extra}>
          <p className={styles.duration}>Duration: 5 days</p>
          <p className={styles.type}>Type: culture</p>
        </div>
        <button className={styles.button}>Read more</button>
      </div>
    </div>
  );
}

export default PopularSection;
