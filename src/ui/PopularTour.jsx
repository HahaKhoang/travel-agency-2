import styles from "./PopularTour.module.scss";
import { RiNumber1 } from "react-icons/ri";

function PopularTour() {
  return (
    <div className={styles.container}>
      <div className={styles.rank}>
        <div className={styles.number}>
          <RiNumber1 />
        </div>
        <p className={styles.title}>Shop in Tokyos Ginza district</p>
      </div>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo recusandae
        reiciendis voluptas veniam reprehenderit ratione{" "}
      </p>
    </div>
  );
}

export default PopularTour;
