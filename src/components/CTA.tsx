import { NavLink } from "react-router-dom";
import styles from "./CTA.module.scss";

type CTAProps = {
  h1: string;
  desc1: string;
  desc2?: string;
  linkTo: string;
  buttonText: string;
};

function CTA({ h1, desc1, desc2, linkTo, buttonText }: CTAProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.main}>{h1}</h1>
        <div className={styles["desc-container"]}>
          <p className={styles.text}>{desc1}</p>
          {desc2 && <p className={styles.text}>{desc2}</p>}
        </div>
        <NavLink to={`${linkTo}`} className={styles.button}>
          {buttonText}
        </NavLink>
      </div>
    </div>
  );
}

export default CTA;
