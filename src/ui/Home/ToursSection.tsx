import ExpandingCards from "./ExpandingCards";
import SectionHeader from "./SectionHeader";

function ToursSection() {
  return (
    <section>
      <SectionHeader header="Our most popular tours" link="See all tours" />
      <ExpandingCards />
    </section>
  );
}

export default ToursSection;
