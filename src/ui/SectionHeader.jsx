import styles from "./SectionHeader.module.scss";

function SectionHeader({ header, link }) {
  return (
    <div className={styles.sectionHeader}>
      <p className={styles.header}>{header}</p>
      <a className={styles.link}>{link}</a>
    </div>
  );
}

export default SectionHeader;
