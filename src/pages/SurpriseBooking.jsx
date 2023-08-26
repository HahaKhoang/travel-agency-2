import Banner from "../ui/Banner";
import surprise from "../../public/img/website/surprise.jpg";
import SurpriseForm from "../ui/SurpriseForm";

function SurpriseBooking() {
  return (
    <div>
      <Banner img={surprise} text="Ready to pack your bags?" />
      <SurpriseForm />
    </div>
  );
}

export default SurpriseBooking;
