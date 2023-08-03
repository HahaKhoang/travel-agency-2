import styles from "./ExpandingCards.module.scss";
import kyoto from "../../public/img/kyoto.jpg";
import fuji from "../../public/img/fuji.jpg";
import tokyo from "../../public/img/tokyo.jpg";
import { useState } from "react";

function ExpandingCards() {
  const [active, setActive] = useState("true");

  const removeClass = () => {
    setActive(false);
  };

  const activeClass = () => {
    removeClass();
    setActive(true);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.panel} ${styles.active} `}
        style={{
          backgroundImage: `url(${kyoto})`,
        }}
      >
        <h3>Explore Kyoto</h3>
      </div>
      <div
        className={`${styles.panel} `}
        style={{
          backgroundImage: `url(${tokyo})`,
        }}
      >
        <h3>Explore Kyoto</h3>
      </div>
      {/* <div
        className={`${styles.panel} `}
        style={{
          backgroundImage: `url(${fuji})`,
        }}
      >
        <h3>Explore Kyoto</h3>
      </div>
      <div
        className={`${styles.panel} `}
        style={{
          backgroundImage: `url(${kyoto})`,
        }}
      >
        <h3>Explore Kyoto</h3>
      </div>
      <div
        className={`${styles.panel} `}
        style={{
          backgroundImage: `url(${tokyo})`,
        }}
      >
        <h3>Explore Kyoto</h3>
      </div> */}
    </div>
  );
}

export default ExpandingCards;
