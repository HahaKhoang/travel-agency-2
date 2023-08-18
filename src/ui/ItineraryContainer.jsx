import styles from "./ItineraryContainer.module.scss";
import ItineraryHeader from "./ItineraryHeader";

function ItineraryContainer() {
  return (
    <div className={styles.container}>
      <ItineraryHeader header="A glance at the itinerary" />
    </div>
  );
}

export default ItineraryContainer;
