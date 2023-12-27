import { NavLink } from "react-router-dom";
import styles from "./SurpriseCTA.module.scss";

function SurpriseCTA({ bgColor }) {
  return (
    <div className={styles.container} style={{ backgroundColor: `${bgColor}` }}>
      <div className={styles.header}>
        <p className={styles.main}>So what are you waiting for?</p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br /> Aliquid earum aspernatur libero doloremque, dolorum,
          necessitatibus{" "}
        </p>
        <NavLink to="/surprise-tour/booking" className={styles.button}>
          Book now
        </NavLink>
      </div>
    </div>
  );
}

export default SurpriseCTA;
