import styles from "./ContactForm.module.scss";
import contact1 from "../../public/img/contact1.jpg";
import contact2 from "../../public/img/contact2.jpg";
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${contact2})`,
      }}
    >
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-row"]}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                console.log(e.target.value);
                setName(e.target.value);
              }}
            />
          </div>
          <div className={styles["form-row"]}>
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => {
                console.log(e.target.value);
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles["form-row"]}>
            <label htmlFor="reason">What can we help you with:</label>
            <select name="reason" id="reason">
              <option value="bookTour">I want to book a tour</option>
              <option value="question">I have a question about a tour</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={styles["form-row"]}>
            <label htmlFor="freeform">Enter your question here:</label>
            <textarea
              id="freeform"
              name="freeform"
              rows="7"
              cols="30"
            ></textarea>
          </div>
          <div className={styles["form-row"]}>
            <input type="submit" value="Submit" className={styles.button} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
