import TourContainer from "../ui/TourContainer";
import TourHeader from "../ui/TourHeader";

function Tours() {
  return (
    <div>
      <TourContainer />

      <TourHeader text="The adventure seekers" />

      <TourHeader text="Nature lovers" />
      <TourHeader text="Cultural connosseuirs" />
    </div>
  );
}

export default Tours;
