import styles from "./FeaturedSection.module.scss";
import kyoto from "../../public/img/kyoto.jpg";

function FeaturedSection() {
  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <img src={kyoto} className={styles.picture} />
      </div>
      <div className={styles["right-container"]}>
        <p className={styles.discover}>Discover Japan 🇯🇵</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          omnis nobis sapiente odio incidunt maxime totam illum dolores ad illo
          ducimus, explicabo excepturi obcaecati beatae, dolore natus!
          Molestias, consectetur accusamus!
        </p>
        <button className={styles.button}>Browse all Japan tours</button>
      </div>
    </div>
  );
}

export default FeaturedSection;
