import SurpriseBookingHeader from "../ui/SurpriseBookingHeader";
import Banner2 from "../ui/Banner2";
import surpriseBooking from "../../public/img/undraw/surpriseBooking.svg";
import SurpriseBookingContainer from "../ui/SurpriseBookingContainer";

function SurpriseBooking() {
  return (
    <div>
      <Banner2
        h1="Ready to pack your bags?"
        text1="Provide us with some basic details"
        text2="And let us handle the rest"
        svg={surpriseBooking}
        bgColor="var(--color-red-dark)"
      />
      <SurpriseBookingHeader />
      <SurpriseBookingContainer />
    </div>
  );
}

export default SurpriseBooking;
