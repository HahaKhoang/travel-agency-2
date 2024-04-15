import Banner from "../components/Banner.tsx";
import surpriseBooking from "../assets/img/undraw/surpriseBooking.svg";
import BookingContainer from "../components/BookingContainer.tsx";
import SurpriseBookingForm from "../ui/SurpriseBooking/SurpriseBookingForm.tsx";
import SurpriseBookingSummary from "../ui/SurpriseBooking/SurpriseBookingSummary.tsx";

function SurpriseBooking() {
  return (
    <div>
      <Banner
        h1="Ready to pack your bags?"
        text1="Provide us with some basic details"
        text2="And let us handle the rest"
        svg={surpriseBooking}
        bannerImg="Illustration of 2 people getting ready for a trip"
        bgColor="var(--color-red-dark)"
      />
      <BookingContainer>
        <SurpriseBookingForm />
        <SurpriseBookingSummary />
      </BookingContainer>
    </div>
  );
}

export default SurpriseBooking;
