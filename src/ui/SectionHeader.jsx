import styles from "./SectionHeader.module.scss";

function SectionHeader({ header }) {
  return <p className={styles.sectionHeader}> {header}</p>;
}

export default SectionHeader;
