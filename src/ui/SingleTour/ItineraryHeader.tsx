import styles from "./ItineraryHeader.module.scss";

type ItineraryHeaderProps = {
  header: string;
};

function ItineraryHeader({ header }: ItineraryHeaderProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{header}</h1>
    </div>
  );
}

export default ItineraryHeader;
