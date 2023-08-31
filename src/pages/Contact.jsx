import Banner from "../ui/Banner";
import ContactForm from "../ui/ContactForm";
// import contact from "../../public/img/website/contact.jpg";
import Banner2 from "../ui/Banner2";
import contact from "../../public/img/undraw/contact.svg";

function Contact() {
  return (
    <div>
      {/* <Banner img={contact} text="Ready for your next adventure?" /> */}
      <Banner2
        h1="How can we help you?"
        text1="Just fill out the form and we will respond as soon as possible"
        svg={contact}
      />
      <ContactForm />
    </div>
  );
}

export default Contact;
