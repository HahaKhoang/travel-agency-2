import styles from "./ExperienceSection.module.scss";
import ExpandingCards from "./ExpandingCards";

function ExperienceSection() {
  return (
    <section className={styles.container}>
      <ExpandingCards />
    </section>
  );
}

export default ExperienceSection;
