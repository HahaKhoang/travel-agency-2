import styles from "./Hero.module.scss";
import hero8 from "../../assets/img/japan/hero8.webp";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <div className={styles.container}>
      <img
        src={hero8}
        className={styles.hero}
        alt="Temple in the mountains in Japan"
      />
      <div className={styles.box}>
        <h1 className={styles.title}>Curated trips for every traveler</h1>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          optio officia illum quibusdam. Minima, reiciendis nesciunt facilis
          assumenda, nam culpa quibusdam rerum magni facere, dolores corporis.
          Enim ratione sit doloribus.
        </p>
        <NavLink to="all-tours" className={styles.button}>
          See all tours
        </NavLink>
      </div>
    </div>
  );
}

export default Hero;
