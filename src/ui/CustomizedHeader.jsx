import styles from "./CustomizedHeader.module.scss";
import jk1 from "../../public/img/jk1.jpg";
import jk2 from "../../public/img/jk2.jpg";
import jk3 from "../../public/img/jk3.jpg";
import jk4 from "../../public/img/jk4.jpg";
import jk5 from "../../public/img/jk5.jpg";
import bi1 from "../../public/img/bi1.jpg";
import bi2 from "../../public/img/bi2.jpg";
import bi3 from "../../public/img/bi3.jpg";
import bi4 from "../../public/img/bi4.jpg";
import bi5 from "../../public/img/bi5.jpg";

function CustomizedHeader() {
  return (
    <div className={styles.container}>
      <img
        src={jk1}
        className={styles.picture}
        style={{ gridRow: "1/3", gridColumn: "1/3" }}
      />
      <img src={bi1} className={styles.picture} />
      <img src={jk2} className={styles.picture} />
      <img
        src={bi2}
        className={styles.picture}
        style={{ gridRow: "1/3", gridColumn: "5/6" }}
      />
      <div
        className={styles.header}
        style={{ gridRow: "2/3", gridColumn: "3/5" }}
      >
        Let us help you travel the way you want
      </div>
      <img src={jk3} className={styles.picture} />
      <img src={bi3} className={styles.picture} style={{ gridColumn: "2/4" }} />
      <img src={jk4} className={styles.picture} />
      <img src={bi4} className={styles.picture} />
    </div>
  );
}

export default CustomizedHeader;
