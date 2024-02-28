import Banner from "../components/Banner.tsx";
import SurpriseBookingHeader from "../ui/SurpriseBookingHeader";
import surpriseBooking from "../assets/img/undraw/surpriseBooking.svg";
import SurpriseBookingContainer from "../ui/SurpriseBooking/SurpriseBookingContainer";

function SurpriseBooking() {
  return (
    <div>
      <Banner
        h1="Ready to pack your bags?"
        text1="Provide us with some basic details"
        text2="And let us handle the rest"
        svg={surpriseBooking}
        bgColor="var(--color-red-dark)"
      />
      {/* <SurpriseBookingHeader /> */}
      <SurpriseBookingContainer />
    </div>
  );
}

export default SurpriseBooking;
