import Banner from "../ui/Banner";
import ContactForm from "../ui/ContactForm";
import contact from "../../public/img/contact.jpg";

function Contact() {
  return (
    <div>
      <Banner img={contact} text="Ready for your next adventure?" />
      <ContactForm />
    </div>
  );
}

export default Contact;
