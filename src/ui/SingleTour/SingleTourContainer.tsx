import SingleTourHero from "./SingleTourHero.tsx";
import { useSingleTour } from "../../features/tours/useSingleTour.tsx";
import SingleTourCarousel from "./SingleTourCarousel";
import SingleTourHeader from "./SingleTourHeader.tsx";
import SingleTourLargePicture from "./SingleTourLargePicture";
import ItineraryContainer from "./ItineraryContainer";
import SingleTourBookNow from "./SingleTourBookNow";
import SingleTourTestimonial from "./SingleTourTestimonial";
import LoadingSpinner from "../../components/LoadingSpinner.tsx";

function SingleTourContainer() {
  const { isLoading, tour } = useSingleTour();
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
    reviewImg,
    slug,
  } = tour;

  const bgColors = [
    "var(--color-blue-light)",
    "var(--color-grey-dark)",
    "var(--color-blue-light)",
  ];

  const carousel = carouselImages.map((el: string, i: number) => {
    return {
      img: el,
      title: carouselTitles[i],
      location: carouselLocations[i],
      color: bgColors[i],
    };
  });

  return (
    <div>
      <SingleTourHero img={imageWelcome} title={welcome} text={welcomeDesc} />
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
        slug={slug}
      />
      <SingleTourTestimonial reviewImg={reviewImg} />
    </div>
  );
}

export default SingleTourContainer;
