import Banner from "../components/Banner.tsx";
import ContactForm from "../ui/ContactForm";
// import contact from "../../public/img/website/contact.jpg";
import contact from "../assets/img/undraw/contact.svg";

function Contact() {
  return (
    <div>
      <Banner
        h1="How can we help you?"
        text1="Just fill out the form and we will respond as soon as possible"
        svg={contact}
        bgColor="var(--color-red-dark)"
      />
      {/* <ContactForm /> */}
    </div>
  );
}

export default Contact;
