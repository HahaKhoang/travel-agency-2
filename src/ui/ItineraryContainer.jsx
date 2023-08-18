import styles from "./ItineraryContainer.module.scss";
import ItineraryDay1 from "./ItineraryDay1";
import ItineraryDay3 from "./ItineraryDay3";
import ItineraryHeader from "./ItineraryHeader";

function ItineraryContainer() {
  return (
    <div className={styles.container}>
      <ItineraryHeader header="A glance at the itinerary" />
      <ItineraryDay1 />
      <ItineraryDay3 />
    </div>
  );
}

export default ItineraryContainer;
