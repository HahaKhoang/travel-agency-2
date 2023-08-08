import SectionHeader from "./SectionHeader";
import styles from "./HowSection.module.scss";
import Box from "./Box";
import plane from "../../public/img/plane.jpg";
import kathy from "../../public/img/kathy.jpg";
import matcha from "../../public/img/matcha.jpg";

function HowSection() {
  return (
    <section className={styles.container}>
      <SectionHeader header="How it works" />
      <div className={styles.boxContainer}>
        <Box
          header="Meet Kathy"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ullam quam cumque excepturi"
          img={kathy}
        />
        <Box
          header="Finalize details"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ullam quam cumque excepturi"
          img={matcha}
        />
        <Box
          header="Enioy your trip"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ullam quam cumque excepturi"
          img={plane}
        />
      </div>
    </section>
  );
}

export default HowSection;
