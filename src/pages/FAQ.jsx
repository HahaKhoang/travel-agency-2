import Accordion from "../ui/Accordion";
import Banner from "../ui/Banner";
import arashiyama from "../../public/img/japan/arashiyama.jpg";

function FAQ() {
  return (
    <div>
      <Banner img={arashiyama} text="Frequently asked questions" />
      <Accordion />
    </div>
  );
}

export default FAQ;
