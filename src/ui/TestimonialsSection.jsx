import Carousel from "./Carousel";
import SectionHeader from "./SectionHeader";
import VerticalSlider from "./VerticalSlider";

function TestimonialsSection() {
  return (
    <section>
      <SectionHeader header="Customer testimonials" />
      {/* <VerticalSlider /> */}
      <Carousel />
    </section>
  );
}

export default TestimonialsSection;
