import Banner from "../ui/Banner";
import pack from "../../public/img/website/pack.jpg";
import CustomizedForm from "../ui/CustomizedForm";
import CustomizedHeader from "../ui/CustomizedHeader";
import CustomizedContainer from "../ui/CustomizedContainer";

function Customized() {
  return (
    <div>
      <Banner img={pack} text="Yes, live your best life!" />
      <CustomizedContainer />
      {/* <CustomizedForm /> */}
    </div>
  );
}

export default Customized;
