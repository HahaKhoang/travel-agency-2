import styles from "./FeaturedSection.module.scss";
import kyoto from "../../public/img/japan/kyoto.jpg";
import { NavLink } from "react-router-dom";

function FeaturedSection() {
  return (
    <section className={styles.container}>
      <div className={styles["left-container"]}>
        <img src={kyoto} className={styles.picture} />
      </div>
      <div className={styles["right-container"]}>
        <div className={styles["discover-container"]}>
          <h2 className={styles.header}>Discover Japan 🇯🇵</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            omnis nobis sapiente odio incidunt maxime totam illum dolores ad
            illo ducimus, explicabo excepturi obcaecati beatae, dolore natus!
            Molestias, consectetur accusamus!
          </p>
          {/* <button className={styles.button}>Browse all Japan tours</button> */}
          <NavLink to="/all-tours/essential-japan" className={styles.button}>
            Read more
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
