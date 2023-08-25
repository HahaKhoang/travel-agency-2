import styles from "./CustomizedForm.module.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Checkbox from "./Checkbox";

function CustomizedForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [select, setSelect] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const categories = [
    { label: "Everything", category: "everything" },
    { label: "Nature", category: "nature" },
    { label: "Culture", category: "culture" },
    { label: "Shopping", category: "shopping" },
    { label: "Food", category: "food" },
    { label: "Nightlife", category: "nightlife" },
    { label: "Undecided", category: "undecided" },
  ];

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
          <label>Category of interest</label>
          <div className={styles["checkbox-container"]}>
            {categories.map((el, i) => (
              <Checkbox label={el.label} key={i} />
            ))}
          </div>
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="duration">Duration</label>
          <select id="duration" name="duration">
            <option value="1">1 day</option>
            <option value="2">2 days</option>
            <option value="3">3 days</option>
            <option value="4">4 days</option>
            <option value="5">5 days</option>
            <option value="6">6 days</option>
            <option value="7">7 days</option>
            <option value="8">8 days</option>
            <option value="9">9 days</option>
            <option value="10">10 day</option>
            <option value="11">11 days</option>
            <option value="12">12 days</option>
            <option value="13">13 days</option>
            <option value="14">14 days</option>
            <option value="flexible">I'm flexible</option>
          </select>
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="people">How many people</label>
          <select id="people" name="people">
            <option value="1">1</option>
            <option value="2">2 </option>
            <option value="3">3 </option>
            <option value="4">4 </option>
            <option value="5">5 </option>
            <option value="6">6 </option>
            <option value="7">7 </option>
            <option value="8">8 </option>
            <option value="9">9 </option>
            <option value="10">10 </option>
          </select>
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="type">Does it need to be child friendly?</label>
          <div className={`${styles["checkbox-container"]} ${styles.children}`}>
            <div className={styles.checkbox}>
              <input type="checkbox" id="Yes" name="type" value="Yes" />
              <span className={styles.checkmark}></span>
              <label htmlFor="checkbox">Yes</label>
            </div>
            <div className={styles.checkbox}>
              <input type="checkbox" id="no" name="type" value="no" />
              <span className={styles.checkmark}></span>
              <label htmlFor="checkbox">No</label>
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
          <label htmlFor="freeform">List of hobbies</label>
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
          <label htmlFor="freeform">List of interests</label>
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
          <label htmlFor="freeform">Things to avoid</label>
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
          <label htmlFor="disabilities">
            Disabilities/concerns to be aware of
          </label>
          <textarea
            id="disabilities"
            rows="7"
            cols="10"
            required
            name="disabilities"
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
