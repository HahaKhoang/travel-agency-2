import styles from "./ContactForm.module.scss";
import arashiyama from "../../public/img/arashiyama.jpg";

function ContactForm() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${arashiyama})`,
      }}
    >
      <div className={styles.stripe}></div>
      <div className={styles.form}>Contact</div>
    </div>
  );
}

export default ContactForm;
