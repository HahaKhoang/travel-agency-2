import styles from "./ExperienceSection.module.scss";
import ExpandingCards from "../../components/ExpandingCards.tsx";

function ExperienceSection() {
  return (
    <section className={styles.container}>
      <ExpandingCards />
    </section>
  );
}

export default ExperienceSection;
