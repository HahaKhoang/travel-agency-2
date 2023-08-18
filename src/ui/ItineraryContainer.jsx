import styles from "./ItineraryContainer.module.scss";
import ItineraryDay1 from "./ItineraryDay1";
import ItineraryDay3 from "./ItineraryDay3";
import ItineraryDay6 from "./ItineraryDay6";
import ItineraryDay8 from "./ItineraryDay8";
import ItineraryHeader from "./ItineraryHeader";

function ItineraryContainer() {
  return (
    <>
      <ItineraryHeader header="A glance at the itinerary" />
      <div className={styles.container}>
        <ItineraryDay1 />
        <ItineraryDay3 />
        <ItineraryDay6 />
        <ItineraryDay8 />
      </div>
    </>
  );
}

export default ItineraryContainer;
