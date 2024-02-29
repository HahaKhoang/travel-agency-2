import styles from "./CustomizedPictureBanner.module.scss";
import contact from "../../assets/img/website/contact.jpg";
import tent from "../../assets/img/website/tent.jpg";
import mountain from "../../assets/img/website/mountain.jpg";
import shopping from "../../assets/img/website/shopping.jpg";
import road from "../../assets/img/website/road.jpg";
import food from "../../assets/img/website/food.jpg";
import culture from "../../assets/img/website/culture.jpg";
import tour from "../../assets/img/website/tour.jpg";
import { useEffect, useState } from "react";
import RotatingWords from "../../components/RotatingWords.tsx";

function CustomizedPictureBanner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 650);
  };

  const mobileContainer = isMobile
    ? ` ${styles["container-mobile"]}`
    : `${styles.container}`;

  return (
    <div className={mobileContainer}>
      {!isMobile ? (
        <img
          src={contact}
          className={styles.picture}
          style={{ gridRow: "1/3", gridColumn: "1/3" }}
        />
      ) : (
        <img src={contact} className={styles.picture} />
      )}
      {!isMobile && <img src={road} className={styles.picture} />}
      {!isMobile && <img src={tent} className={styles.picture} />}
      {!isMobile ? (
        <img
          src={food}
          className={styles.picture}
          style={{ gridRow: "1/3", gridColumn: "5/6" }}
        />
      ) : (
        <img src={food} className={styles.picture} />
      )}
      {!isMobile ? (
        <div
          className={styles.header}
          style={{ gridRow: "2/3", gridColumn: "3/5" }}
        >
          <RotatingWords />
        </div>
      ) : (
        <div className={styles.header}>
          <RotatingWords />
        </div>
      )}
      {!isMobile && <img src={mountain} className={styles.picture} />}
      {!isMobile ? (
        <img
          src={culture}
          className={styles.picture}
          style={{ gridColumn: "2/4" }}
        />
      ) : (
        <img src={culture} className={styles.picture} />
      )}
      {!isMobile && <img src={shopping} className={styles.picture} />}
      <img src={tour} className={styles.picture} />
    </div>
  );
}

export default CustomizedPictureBanner;
