import SectionHeader from "./SectionHeader";
import styles from "./HowSection.module.scss";
import Box from "./Box";
import { IoMdHappy, IoMdAirplane, IoIosList } from "react-icons/io";
import {
  RiCheckDoubleLine,
  RiEmotionHappyLine,
  RiListUnordered,
  RiSuitcaseLine,
  RiUser5Line,
} from "react-icons/ri";

function HowSection() {
  return (
    <section className={styles.container}>
      <SectionHeader header="How it works" />
      <div className={styles.boxContainer}>
        <Box
          header="Meet Kathy"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ullam quam cumque excepturi"
          icon={<RiEmotionHappyLine />}
        />
        <Box
          header="Finalize details"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ullam quam cumque excepturi"
          icon={<RiListUnordered />}
        />
        <Box
          header="Enioy your trip"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ullam quam cumque excepturi"
          icon={<RiSuitcaseLine />}
        />
      </div>
    </section>
  );
}

export default HowSection;
