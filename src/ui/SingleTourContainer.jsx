import TourBanner from "./TourBanner";
import kyoto from "../../public/img/kyoto.jpg";
import SingleTourPicture from "./SingleTourCarousel";
import SingleTourHeader from "./SingleTourHeader";
import SingleTourLargePicture from "./SingleTourLargePicture";
import ItineraryContainer from "./ItineraryContainer";
import SingleTourBookNow from "./SingleTourBookNow";
import SingleTourTestimonial from "./SingleTourTestimonial";

function SingleTourContainer() {
  return (
    <div>
      <TourBanner
        img={kyoto}
        title="日本へようこそ"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          officia nisi ea porro quisquam praesentium dignissimos nam aspernatur
          aliquid neque."
      />
      <SingleTourPicture />
      <SingleTourHeader />
      <SingleTourLargePicture />
      <ItineraryContainer />
      <SingleTourBookNow />
      <SingleTourTestimonial />
    </div>
  );
}

export default SingleTourContainer;
