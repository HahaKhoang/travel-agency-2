import { NavLink } from "react-router-dom";
import styles from "./CTA.module.scss";

type CTAProps = {
  h1: string;
  desc: string;
  linkTo: string;
  buttonText: string;
};

function CTA({ h1, desc, linkTo, buttonText }: CTAProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.main}>{h1}</h1>
        <p className={styles.text}>{desc}</p>
        <NavLink to={`${linkTo}`} className={styles.button}>
          {buttonText}
        </NavLink>
      </div>
    </div>
  );
}

export default CTA;
