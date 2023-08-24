import { useSingleTour } from "../features/tours/useSingleTour";
import styles from "./ItineraryContainer.module.scss";
import ItineraryDay1 from "./ItineraryDay1";
import ItineraryDay11 from "./ItineraryDay11";
import ItineraryDay3 from "./ItineraryDay3";
import ItineraryDay6 from "./ItineraryDay6";
import ItineraryDay8 from "./ItineraryDay8";
import ItineraryHeader from "./ItineraryHeader";

function ItineraryContainer() {
  const { isLoading, tour, error } = useSingleTour();

  const { dayTitle, dayDesc, dayImages } = tour;
  const [
    day1Title,
    day2Title,
    day3Title,
    day4Title,
    day5Title,
    day6Title,
    day7Title,
    day8Title,
    day9Title,
    day10Title,
    day11Title,
    day12Title,
    day13Title,
    day14Title,
  ] = dayTitle;
  const [
    day1Desc,
    day2Desc,
    day3Desc,
    day4Desc,
    day5Desc,
    day6Desc,
    day7Desc,
    day8Desc,
    day9Desc,
    day10Desc,
    day11Desc,
    day12Desc,
    day13Desc,
    day14Desc,
  ] = dayDesc;
  const [img1, img2, img3, img4, img5, img6, img7, img8] = dayImages;

  return (
    <>
      <ItineraryHeader header="A look at the itinerary" />
      <div className={styles.container}>
        <ItineraryDay1
          img1={img1}
          day1Title={day1Title}
          day1Desc={day1Desc}
          day2Title={day2Title}
          day2Desc={day2Desc}
        />
        {day3Title && (
          <ItineraryDay3
            day3Title={day3Title}
            day3Desc={day3Desc}
            day4Title={day4Title}
            day4Desc={day4Desc}
            day5Title={day5Title}
            day5Desc={day5Desc}
            img2={img2}
          />
        )}
        {day6Title && (
          <ItineraryDay6
            day6Title={day6Title}
            day6Desc={day6Desc}
            day7Title={day7Title}
            day7Desc={day7Desc}
            img3={img3}
            img4={img4}
          />
        )}
        {day8Title && (
          <ItineraryDay8
            day8Title={day8Title}
            day8Desc={day8Desc}
            day9Title={day9Title}
            day9Desc={day9Desc}
            day10Title={day10Title}
            day10Desc={day10Desc}
            img5={img5}
          />
        )}
        {day11Title && (
          <ItineraryDay11
            day11Title={day11Title}
            day11Desc={day11Desc}
            day12Title={day12Title}
            day12Desc={day12Desc}
            img6={img6}
            img7={img7}
          />
        )}
      </div>
    </>
  );
}

export default ItineraryContainer;
