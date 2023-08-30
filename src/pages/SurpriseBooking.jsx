import Banner from "../ui/Banner";
import night from "../../public/img/website/night.jpg";
import SurpriseForm from "../ui/SurpriseForm";
import SurpriseCarousel from "../ui/SurpriseCarousel";

function SurpriseBooking() {
  return (
    <div>
      <Banner img={night} text="Ready to pack your bags?" />
      <SurpriseCarousel />
      <SurpriseForm />
    </div>
  );
}

export default SurpriseBooking;
