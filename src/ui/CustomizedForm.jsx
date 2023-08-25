import styles from "./CustomizedForm.module.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function CustomizedForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [select, setSelect] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nnxnl4p",
        "template_wrnr298",
        form.current,
        "M-heCyvRsVkznWfwP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setSelect("");
    setMessage("");
  }

  return (
    <div className={styles.container}>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className={styles["form-row"]}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="category">
            Category of interest (select all that apply)
          </label>
          <div className={styles["checkbox-container"]}>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                id="everything"
                name="category"
                value="everything"
              />
              <label htmlFor="checkbox">Everything</label>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                id="nature"
                name="category"
                value="nature"
              />
              <label htmlFor="checkbox">Nature</label>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                id="culture"
                name="category"
                value="culture"
              />
              <label htmlFor="checkbox">Culture</label>
            </div>
            <div className={styles.checkbox}>
              <input type="checkbox" id="food" name="category" value="food" />
              <label htmlFor="checkbox">Food</label>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                id="shopping"
                name="category"
                value="shopping"
              />
              <label htmlFor="checkbox">Shopping</label>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                id="nightlife"
                name="category"
                value="nightlife"
              />
              <label htmlFor="checkbox">Nightlife</label>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                id="undecided"
                name="category"
                value="undecided"
              />
              <label htmlFor="checkbox">Undecided</label>
            </div>
          </div>
        </div>

        <div className={styles["form-row"]}>
          <label htmlFor="freeform">Countries of interest:</label>
          <textarea
            id="freeform"
            rows="3"
            cols="10"
            required
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="freeform">Please list some of your hobbies:</label>
          <textarea
            id="freeform"
            rows="3"
            cols="10"
            required
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="freeform">Please list some of your interests:</label>
          <textarea
            id="freeform"
            rows="3"
            cols="10"
            required
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="freeform">
            Please list things you would like to avoid:
          </label>
          <textarea
            id="freeform"
            rows="3"
            cols="10"
            required
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={styles["form-row"]}>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomizedForm;

{
  /* <div className={styles["form-row"]}>
<label htmlFor="reason">What can we help you with:</label>
<select
  id="reason"
  name="select"
  value={select}
  onChange={(e) => {
    console.log(e.target.value);
    setSelect(e.target.value);
  }}
>
  <option value="bookTour">I want to book a tour</option>
  <option value="question">I have a question about a tour</option>
  <option value="other">Other</option>
</select>
</div> */
}
