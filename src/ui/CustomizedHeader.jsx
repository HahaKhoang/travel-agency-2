import styles from "./CustomizedHeader.module.scss";
import contact from "../../public/img/website/contact.jpg";
import tent from "../../public/img/website/tent.jpg";
import mountain from "../../public/img/website/mountain.jpg";
import shopping from "../../public/img/website/shopping.jpg";
import road from "../../public/img/website/road.jpg";
import food from "../../public/img/website/food.jpg";
import culture from "../../public/img/website/culture.jpg";
import tour from "../../public/img/website/tour.jpg";
import Subheading from "./Subheading";

function CustomizedHeader() {
  return (
    <div className={styles.container}>
      <img
        src={contact}
        className={styles.picture}
        style={{ gridRow: "1/3", gridColumn: "1/3" }}
      />
      <img src={road} className={styles.picture} />
      <img src={tent} className={styles.picture} />
      <img
        src={food}
        className={styles.picture}
        style={{ gridRow: "1/3", gridColumn: "5/6" }}
      />
      <div
        className={styles.header}
        style={{ gridRow: "2/3", gridColumn: "3/5" }}
      >
        {/* <RotatingWords /> */}
        <Subheading />
      </div>
      <img src={mountain} className={styles.picture} />
      <img
        src={culture}
        className={styles.picture}
        style={{ gridColumn: "2/4" }}
      />
      <img src={shopping} className={styles.picture} />
      <img src={tour} className={styles.picture} />
    </div>
  );
}

export default CustomizedHeader;
