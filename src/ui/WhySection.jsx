import SectionHeader from "./SectionHeader";
import styles from "./WhySection.module.scss";
import lofoten from "../../public/img/lofoten.jpg";
import nz from "../../public/img/nz.jpg";
import svalbard from "../../public/img/svalbard.jpg";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

function WhySection() {
  return (
    <section>
      <SectionHeader
        header="Why choose Kathy?"
        link="Get to know Kathy better"
      />
      <div className={styles.container}>
        <div className={styles.pictureContainer}>
          <img src={lofoten} className={styles.pic1} />
          <img src={nz} className={styles.pic2} />
          <img src={svalbard} className={styles.pic3} />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <span className={styles.icon}>
              <RiNumber1 />
            </span>
            <div className={styles.detailContainer}>
              <p className={styles.heading}>Budget-friendly</p>
              <p className={styles.detail}>
                I have been traveling around the world for the past decade and
                it takes financial planning to afford this lifestyle!
              </p>
            </div>
          </div>
          <div className={styles.details}>
            <span className={styles.icon}>
              <RiNumber2 />
            </span>
            <div className={styles.detailContainer}>
              <p className={styles.heading}>Experienced traveler</p>
              <p className={styles.detail}>
                I have lived across 5 continents and have traveled from the
                places as south as New Zealand to places as far north as
                Svalbard
              </p>
            </div>
          </div>{" "}
          <div className={styles.details}>
            <span className={styles.icon}>
              <RiNumber3 />
            </span>
            <div className={styles.detailContainer}>
              <p className={styles.heading}>Unforgettable experiences</p>
              <p className={styles.detail}>
                When traveling, I love experiencing the cultural aspects of each
                place I visit because it gives me a better insight into
                understanding that place!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySection;
