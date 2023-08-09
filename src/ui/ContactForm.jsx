import styles from "./ContactForm.module.scss";
import arashiyama from "../../public/img/arashiyama.jpg";
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
        backgroundImage: `url(${arashiyama})`,
      }}
    >
      <div className={styles.form}></div>
      <div className={styles.stripe}>
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
              rows="4"
              cols="30"
            ></textarea>
          </div>
          <div className={styles["form-row"]}>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
