import TourBanner from "./TourBanner";
import { useSingleTour } from "../features/tours/useSingleTour.js";
import kyoto from "../../public/img/japan/kyoto.jpg";
import SingleTourCarousel from "./SingleTourCarousel";
import SingleTourHeader from "./SingleTourHeader";
import SingleTourLargePicture from "./SingleTourLargePicture";
import ItineraryContainer from "./ItineraryContainer";
import SingleTourBookNow from "./SingleTourBookNow";
import SingleTourTestimonial from "./SingleTourTestimonial";
import LoadingSpinner from "./LoadingSpinner";

function SingleTourContainer() {
  const { isLoading, tour, error } = useSingleTour();
  if (isLoading) return <LoadingSpinner />;

  const {
    imageWelcome,
    welcome,
    welcomeDesc,
    carouselImages,
    carouselTitles,
    carouselLocations,
    message,
    imageBG,
    imageHeader,
    imageText,
    duration,
    price,
    cities,
    category,
  } = tour;

  const bgColors = [
    "var(--color-blue-light)",
    "#e5e7eb",
    "var(--color-blue-light)",
  ];

  const carousel = carouselImages.map(function (x, i) {
    return {
      img: x,
      title: carouselTitles[i],
      location: carouselLocations[i],
      color: bgColors[i],
    };
  });
  console.log(carousel);

  return (
    <div>
      <TourBanner img={imageWelcome} title={welcome} text={welcomeDesc} />
      <SingleTourCarousel carousel={carousel} />
      <SingleTourHeader message={message} />
      <SingleTourLargePicture
        imageBG={imageBG}
        imageHeader={imageHeader}
        imageText={imageText}
      />
      <ItineraryContainer />
      <SingleTourBookNow
        duration={duration}
        price={price}
        cities={cities}
        category={category}
      />
      <SingleTourTestimonial />
    </div>
  );
}

export default SingleTourContainer;
