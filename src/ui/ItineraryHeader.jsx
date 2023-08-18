import styles from "./ItineraryHeader.module.scss";

function ItineraryHeader({ header }) {
  return (
    <div className={styles.container}>
      <h1>{header}</h1>
    </div>
  );
}

export default ItineraryHeader;
