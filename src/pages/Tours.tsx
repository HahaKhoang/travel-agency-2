import Banner from "../components/Banner.tsx";
import TourContainer from "../ui/Tours/TourContainer";
import tour from "../assets/img/undraw/tours.svg";

function Tours() {
  return (
    <div>
      <Banner
        h1="Find the perfect tour for you"
        text1="Browse through our selection of tours"
        text2="  If you can't find one to your liking, we also do customized tours!"
        svg={tour}
        bannerImg="Illustration of a person looking at the world"
        bgColor="var(--color-red-dark)"
      />
      <TourContainer />
    </div>
  );
}

export default Tours;
