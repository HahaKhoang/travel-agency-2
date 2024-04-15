import ItineraryDays from "../../components/ItineraryDays";
import { useSingleTour } from "../../features/tours/useSingleTour.tsx";
import styles from "./ItineraryContainer.module.scss";

import ItineraryHeader from "./ItineraryHeader";

function ItineraryContainer() {
  const { tour } = useSingleTour();

  const { dayTitle, dayDesc, dayImages, dayAlt } = tour;
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
    day15Title,
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
    day15Desc,
  ] = dayDesc;
  const [img1, img2, img3, img4, img5, img6, img7] = dayImages;
  const [img1Alt, img2Alt, img3Alt, img4Alt, img5Alt, img6Alt, img7Alt] =
    dayAlt;

  let itinerary;

  if (tour.duration === 1) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
      />
    );
  }

  if (tour.duration === 2) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
        day2Title={day2Title}
        day2Desc={day2Desc}
      />
    );
  }

  if (tour.duration === 3) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        img2={img2}
        img2Alt={img2Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
        day2Title={day2Title}
        day2Desc={day2Desc}
        day3Title={day3Title}
        day3Desc={day3Desc}
      />
    );
  }

  if (tour.duration === 4) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        img2={img2}
        img2Alt={img2Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
        day2Title={day2Title}
        day2Desc={day2Desc}
        day3Title={day3Title}
        day3Desc={day3Desc}
        day4Title={day4Title}
        day4Desc={day4Desc}
      />
    );
  }

  if (tour.duration === 5) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        img2={img2}
        img2Alt={img2Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
        day2Title={day2Title}
        day2Desc={day2Desc}
        day3Title={day3Title}
        day3Desc={day3Desc}
        day4Title={day4Title}
        day4Desc={day4Desc}
        day5Title={day5Title}
        day5Desc={day5Desc}
      />
    );
  }

  if (tour.duration === 6) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        img2={img2}
        img2Alt={img2Alt}
        img3={img3}
        img3Alt={img3Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
        day2Title={day2Title}
        day2Desc={day2Desc}
        day3Title={day3Title}
        day3Desc={day3Desc}
        day4Title={day4Title}
        day4Desc={day4Desc}
        day5Title={day5Title}
        day5Desc={day5Desc}
        day6Title={day6Title}
        day6Desc={day6Desc}
      />
    );
  }

  if (tour.duration === 7) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        img2={img2}
        img2Alt={img2Alt}
        img3={img3}
        img3Alt={img3Alt}
        img4={img4}
        img4Alt={img4Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
        day2Title={day2Title}
        day2Desc={day2Desc}
        day3Title={day3Title}
        day3Desc={day3Desc}
        day4Title={day4Title}
        day4Desc={day4Desc}
        day5Title={day5Title}
        day5Desc={day5Desc}
        day6Title={day6Title}
        day6Desc={day6Desc}
        day7Title={day7Title}
        day7Desc={day7Desc}
      />
    );
  }

  if (tour.duration === 8) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        img2={img2}
        img2Alt={img2Alt}
        img3={img3}
        img3Alt={img3Alt}
        img4={img4}
        img4Alt={img4Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
        day2Title={day2Title}
        day2Desc={day2Desc}
        day3Title={day3Title}
        day3Desc={day3Desc}
        day4Title={day4Title}
        day4Desc={day4Desc}
        day5Title={day5Title}
        day5Desc={day5Desc}
        day6Title={day6Title}
        day6Desc={day6Desc}
        day7Title={day7Title}
        day7Desc={day7Desc}
        day8Title={day8Title}
        day8Desc={day8Desc}
      />
    );
  }

  if (tour.duration === 9) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        img2={img2}
        img2Alt={img2Alt}
        img3={img3}
        img3Alt={img3Alt}
        img4={img4}
        img4Alt={img4Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
        day2Title={day2Title}
        day2Desc={day2Desc}
        day3Title={day3Title}
        day3Desc={day3Desc}
        day4Title={day4Title}
        day4Desc={day4Desc}
        day5Title={day5Title}
        day5Desc={day5Desc}
        day6Title={day6Title}
        day6Desc={day6Desc}
        day7Title={day7Title}
        day7Desc={day7Desc}
        day8Title={day8Title}
        day8Desc={day8Desc}
        day9Title={day9Title}
        day9Desc={day9Desc}
      />
    );
  }

  if (tour.duration === 10) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        img2={img2}
        img2Alt={img2Alt}
        img3={img3}
        img3Alt={img3Alt}
        img4={img4}
        img4Alt={img4Alt}
        img5={img5}
        img5Alt={img5Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
        day2Title={day2Title}
        day2Desc={day2Desc}
        day3Title={day3Title}
        day3Desc={day3Desc}
        day4Title={day4Title}
        day4Desc={day4Desc}
        day5Title={day5Title}
        day5Desc={day5Desc}
        day6Title={day6Title}
        day6Desc={day6Desc}
        day7Title={day7Title}
        day7Desc={day7Desc}
        day8Title={day8Title}
        day8Desc={day8Desc}
        day9Title={day9Title}
        day9Desc={day9Desc}
        day10Title={day10Title}
        day10Desc={day10Desc}
      />
    );
  }

  if (tour.duration === 11) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        img2={img2}
        img2Alt={img2Alt}
        img3={img3}
        img3Alt={img3Alt}
        img4={img4}
        img4Alt={img4Alt}
        img5={img5}
        img5Alt={img5Alt}
        img6={img6}
        img6Alt={img6Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
        day2Title={day2Title}
        day2Desc={day2Desc}
        day3Title={day3Title}
        day3Desc={day3Desc}
        day4Title={day4Title}
        day4Desc={day4Desc}
        day5Title={day5Title}
        day5Desc={day5Desc}
        day6Title={day6Title}
        day6Desc={day6Desc}
        day7Title={day7Title}
        day7Desc={day7Desc}
        day8Title={day8Title}
        day8Desc={day8Desc}
        day9Title={day9Title}
        day9Desc={day9Desc}
        day10Title={day10Title}
        day10Desc={day10Desc}
        day11Title={day11Title}
        day11Desc={day11Desc}
      />
    );
  }

  if (tour.duration === 12) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        img2={img2}
        img2Alt={img2Alt}
        img3={img3}
        img3Alt={img3Alt}
        img4={img4}
        img4Alt={img4Alt}
        img5={img5}
        img5Alt={img5Alt}
        img6={img6}
        img6Alt={img6Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
        day2Title={day2Title}
        day2Desc={day2Desc}
        day3Title={day3Title}
        day3Desc={day3Desc}
        day4Title={day4Title}
        day4Desc={day4Desc}
        day5Title={day5Title}
        day5Desc={day5Desc}
        day6Title={day6Title}
        day6Desc={day6Desc}
        day7Title={day7Title}
        day7Desc={day7Desc}
        day8Title={day8Title}
        day8Desc={day8Desc}
        day9Title={day9Title}
        day9Desc={day9Desc}
        day10Title={day10Title}
        day10Desc={day10Desc}
        day11Title={day11Title}
        day11Desc={day11Desc}
        day12Title={day12Title}
        day12Desc={day12Desc}
      />
    );
  }

  if (tour.duration === 13) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        img2={img2}
        img2Alt={img2Alt}
        img3={img3}
        img3Alt={img3Alt}
        img4={img4}
        img4Alt={img4Alt}
        img5={img5}
        img5Alt={img5Alt}
        img6={img6}
        img6Alt={img6Alt}
        img7={img7}
        img7Alt={img7Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
        day2Title={day2Title}
        day2Desc={day2Desc}
        day3Title={day3Title}
        day3Desc={day3Desc}
        day4Title={day4Title}
        day4Desc={day4Desc}
        day5Title={day5Title}
        day5Desc={day5Desc}
        day6Title={day6Title}
        day6Desc={day6Desc}
        day7Title={day7Title}
        day7Desc={day7Desc}
        day8Title={day8Title}
        day8Desc={day8Desc}
        day9Title={day9Title}
        day9Desc={day9Desc}
        day10Title={day10Title}
        day10Desc={day10Desc}
        day11Title={day11Title}
        day11Desc={day11Desc}
        day12Title={day12Title}
        day12Desc={day12Desc}
        day13Title={day13Title}
        day13Desc={day13Desc}
      />
    );
  }

  if (tour.duration === 14) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        img2={img2}
        img2Alt={img2Alt}
        img3={img3}
        img3Alt={img3Alt}
        img4={img4}
        img4Alt={img4Alt}
        img5={img5}
        img5Alt={img5Alt}
        img6={img6}
        img6Alt={img6Alt}
        img7={img7}
        img7Alt={img7Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
        day2Title={day2Title}
        day2Desc={day2Desc}
        day3Title={day3Title}
        day3Desc={day3Desc}
        day4Title={day4Title}
        day4Desc={day4Desc}
        day5Title={day5Title}
        day5Desc={day5Desc}
        day6Title={day6Title}
        day6Desc={day6Desc}
        day7Title={day7Title}
        day7Desc={day7Desc}
        day8Title={day8Title}
        day8Desc={day8Desc}
        day9Title={day9Title}
        day9Desc={day9Desc}
        day10Title={day10Title}
        day10Desc={day10Desc}
        day11Title={day11Title}
        day11Desc={day11Desc}
        day12Title={day12Title}
        day12Desc={day12Desc}
        day13Title={day13Title}
        day13Desc={day13Desc}
        day14Title={day14Title}
        day14Desc={day14Desc}
      />
    );
  }

  if (tour.duration === 15) {
    itinerary = (
      <ItineraryDays
        img1={img1}
        img1Alt={img1Alt}
        img2={img2}
        img2Alt={img2Alt}
        img3={img3}
        img3Alt={img3Alt}
        img4={img4}
        img4Alt={img4Alt}
        img5={img5}
        img5Alt={img5Alt}
        img6={img6}
        img6Alt={img6Alt}
        img7={img7}
        img7Alt={img7Alt}
        day1Title={day1Title}
        day1Desc={day1Desc}
        day2Title={day2Title}
        day2Desc={day2Desc}
        day3Title={day3Title}
        day3Desc={day3Desc}
        day4Title={day4Title}
        day4Desc={day4Desc}
        day5Title={day5Title}
        day5Desc={day5Desc}
        day6Title={day6Title}
        day6Desc={day6Desc}
        day7Title={day7Title}
        day7Desc={day7Desc}
        day8Title={day8Title}
        day8Desc={day8Desc}
        day9Title={day9Title}
        day9Desc={day9Desc}
        day10Title={day10Title}
        day10Desc={day10Desc}
        day11Title={day11Title}
        day11Desc={day11Desc}
        day12Title={day12Title}
        day12Desc={day12Desc}
        day13Title={day13Title}
        day13Desc={day13Desc}
        day14Title={day14Title}
        day14Desc={day14Desc}
        day15Title={day15Title}
        day15Desc={day15Desc}
      />
    );
  }

  return (
    <>
      <ItineraryHeader header="A look at the itinerary" />
      <div className={styles.container}>{itinerary}</div>
    </>
  );
}

export default ItineraryContainer;
