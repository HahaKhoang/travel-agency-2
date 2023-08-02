import SectionHeader from "./SectionHeader";
import styles from "./WhySection.module.scss";
import lofoten from "../../public/img/lofoten.jpg";
import nz from "../../public/img/nz.jpg";
import svalbard from "../../public/img/svalbard.jpg";

function WhySection() {
  return (
    <section>
      <SectionHeader header="Why choose Kathy?" />
      <div className={styles.container}>
        <div className={styles.pictureContainer}>
          <img src={lofoten} className={styles.pic1} />
          <img src={nz} className={styles.pic2} />
          <img src={svalbard} className={styles.pic3} />
        </div>
        <div className={styles.detailsContainer}>Details</div>
      </div>
    </section>
  );
}

export default WhySection;
