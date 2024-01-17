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
import { useEffect, useState } from "react";

function CustomizedHeader() {
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
          <Subheading />
        </div>
      ) : (
        <div className={styles.header}>
          <Subheading />
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

export default CustomizedHeader;
