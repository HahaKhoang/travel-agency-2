import Banner from "../ui/Banner";
import ContactForm from "../ui/ContactForm";
// import contact from "../../public/img/website/contact.jpg";
import Banner2 from "../ui/Banner2";
import contact from "../../public/img/undraw/contact.svg";
import TestForm from "../ui/TestForm";

function Contact() {
  return (
    <div>
      {/* <Banner img={contact} text="Ready for your next adventure?" /> */}
      <Banner2
        h1="How can we help you?"
        text1="Just fill out the form and we will respond as soon as possible"
        svg={contact}
        bgColor="var(--color-blue-med)"
      />
      <ContactForm />
      {/* <TestForm /> */}
    </div>
  );
}

export default Contact;
