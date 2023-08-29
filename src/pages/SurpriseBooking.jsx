import Banner from "../ui/Banner";
import surprise from "../../public/img/website/surprise.jpg";
import SurpriseForm from "../ui/SurpriseForm";
import SurpriseCarousel from "../ui/SurpriseCarousel";

function SurpriseBooking() {
  return (
    <div>
      <Banner img={surprise} text="Ready to pack your bags?" />
      <SurpriseCarousel />
      <SurpriseForm />
    </div>
  );
}

export default SurpriseBooking;
