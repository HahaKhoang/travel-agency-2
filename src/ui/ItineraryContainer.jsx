import styles from "./ItineraryContainer.module.scss";
import ItineraryDay1 from "./ItineraryDay1";
import ItineraryHeader from "./ItineraryHeader";

function ItineraryContainer() {
  return (
    <div className={styles.container}>
      <ItineraryHeader header="A glance at the itinerary" />
      <ItineraryDay1 />
    </div>
  );
}

export default ItineraryContainer;
