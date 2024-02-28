import Banner from "../components/Banner.tsx";
import Accordion from "../components/Accordion.tsx";
import faq from "../assets/img/undraw/faq.svg";

function FAQ() {
  return (
    <div>
      <Banner
        h1="Frequently asked questions"
        text1="Still have an unanswered question?"
        text2="Feel free to contact us"
        svg={faq}
        bgColor="var(--color-red-dark)"
      />
      <Accordion />
    </div>
  );
}

export default FAQ;
