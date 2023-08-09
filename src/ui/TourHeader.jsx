import styles from "./TourHeader.module.scss";

function TourHeader({ text }) {
  return <div className={styles.header}>{text}</div>;
}

export default TourHeader;
