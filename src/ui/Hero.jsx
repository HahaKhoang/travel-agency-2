import styles from "./Hero.module.scss";
import hero8 from "../../public/img/hero8.jpg";

function Hero() {
  return (
    <div className={styles.container}>
      <img src={hero8} className={styles.hero} />
      <div className={styles.box}>
        <h1 className={styles.title}>
          Ratione eos et cumque amet eum doloremque provident accusantium{" "}
        </h1>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          optio officia illum quibusdam. Minima, reiciendis nesciunt facilis
          assumenda, nam culpa quibusdam rerum magni facere, dolores corporis.
          Enim ratione sit doloribus.
        </p>
        <button className={styles.button}>See all tours</button>
      </div>
    </div>
  );
}

export default Hero;
