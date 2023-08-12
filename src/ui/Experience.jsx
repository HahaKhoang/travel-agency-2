import styles from "./Experience.module.scss";
import { RiShoppingBagLine } from "react-icons/ri";

function Experience() {
  return (
    <div className={styles.container}>
      <div className={styles.experience}>
        <RiShoppingBagLine className={styles.icon} />
        <p className={styles.title}>Shopping</p>
        <button className={styles.button}>Browse all shopping tours</button>
      </div>
      <div className={styles.experience}>
        <RiShoppingBagLine className={styles.icon} />
        <p className={styles.title}>Shopping</p>
        <button className={styles.button}>Browse all shopping tours</button>
      </div>
      <div className={styles.experience}>
        <RiShoppingBagLine className={styles.icon} />
        <p className={styles.title}>Shopping</p>
        <button className={styles.button}>Browse all shopping tours</button>
      </div>
      <div className={styles.experience}>
        <RiShoppingBagLine className={styles.icon} />
        <p className={styles.title}>Shopping</p>
        <button className={styles.button}>Browse all shopping tours</button>
      </div>
    </div>
  );
}

export default Experience;
