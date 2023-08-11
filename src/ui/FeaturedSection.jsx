import styles from "./FeaturedSection.module.scss";
import kyoto from "../../public/img/kyoto.jpg";
import Tile from "./Tile";
import PopularTour from "./PopularTour";
import { RiVipCrownLine } from "react-icons/ri";

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
        <div className={styles.tiles}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
      </div>
      <div className={styles["right-container"]}>
        <div className={styles["popular-tour"]}>
          <p>Most popular tours</p>
          <RiVipCrownLine />
        </div>
        <PopularTour />
        <PopularTour />
        <PopularTour />
        <PopularTour />
        <PopularTour />
      </div>
    </section>
  );
}

export default FeaturedSection;
