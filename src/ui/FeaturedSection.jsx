import styles from "./FeaturedSection.module.scss";
import kyoto from "../../public/img/kyoto.jpg";

function FeaturedSection() {
  return (
    <section className={styles.container}>
      <div className={styles["left-container"]}>
        <div className={styles.featured}>
          <img src={kyoto} className={styles.picture} />
          <p className={styles.header}>Discover Japan</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam natus
            expedita explicabo incidunt veritatis mollitia?
          </p>
        </div>
        <div className={styles.tiles}>Create tile component</div>
      </div>
    </section>
  );
}

export default FeaturedSection;
