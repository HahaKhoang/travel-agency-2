import Banner2 from "../ui/Banner2";
import TourContainer from "../ui/TourContainer";
import tour from "../../public/img/undraw/tours.svg";

function Tours() {
  return (
    <div>
      <Banner2
        h1="Find the perfect tour for you"
        text1="Browse through our selection of tours"
        text2="  If you can't find one to your liking, we also do customized tours!"
        svg={tour}
        bgColor="var(--color-blue-dark)"
      />
      <TourContainer />
    </div>
  );
}

export default Tours;
