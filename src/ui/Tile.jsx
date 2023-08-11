import styles from "./Tile.module.scss";
import tokyo from "../../public/img/tokyo.jpg";

function Tile() {
  return (
    <div className={styles.container}>
      <img src={tokyo} className={styles.picture} />
      <p className={styles.title}>Lorem ipsum dolor sit amet consectetur</p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis iure
        nemo autem similique odit est neque hic mollitia
      </p>
      <a className={styles.link}>&rarr; Read more</a>
    </div>
  );
}

export default Tile;
