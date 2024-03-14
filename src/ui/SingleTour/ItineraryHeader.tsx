import styles from "./ItineraryHeader.module.scss";

function ItineraryHeader({ header }: { header: string }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{header}</h1>
    </div>
  );
}

export default ItineraryHeader;
