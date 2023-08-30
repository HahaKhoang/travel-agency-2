import Banner from "../ui/Banner";
import night from "../../public/img/website/night.jpg";
import SurpriseForm from "../ui/SurpriseForm";
import SurpriseCarousel from "../ui/SurpriseCarousel";
import SurpriseBookingHeader from "../ui/SurpriseBookingHeader";

function SurpriseBooking() {
  return (
    <div>
      <Banner img={night} text="Ready to pack your bags?" />
      {/* <SurpriseCarousel /> */}
      <SurpriseBookingHeader />
      <SurpriseForm />
    </div>
  );
}

export default SurpriseBooking;
