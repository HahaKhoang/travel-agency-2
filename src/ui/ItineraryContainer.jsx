import { useSingleTour } from "../features/tours/useSingleTour";
import styles from "./ItineraryContainer.module.scss";
import ItineraryDay1 from "./ItineraryDay1";
import ItineraryDay3 from "./ItineraryDay3";
import ItineraryDay6 from "./ItineraryDay6";
import ItineraryDay8 from "./ItineraryDay8";
import ItineraryHeader from "./ItineraryHeader";

function ItineraryContainer() {
  const { isLoading, tour, error } = useSingleTour();

  const { dayTitle, dayDesc, dayImages } = tour;
  const [day1Title, day2Title] = dayTitle;
  const [day1Desc, day2Desc] = dayDesc;
  const [img1] = dayImages;

  return (
    <>
      <ItineraryHeader header="A look at the itinerary" />
      <div className={styles.container}>
        <ItineraryDay1
          img1={img1}
          day1Title={day1Title}
          day1Desc={day1Desc}
          day2Title2={day2Title}
          day2Desc={day2Desc}
        />
        <ItineraryDay3 />
        <ItineraryDay6 />
        <ItineraryDay8 />
      </div>
    </>
  );
}

export default ItineraryContainer;
