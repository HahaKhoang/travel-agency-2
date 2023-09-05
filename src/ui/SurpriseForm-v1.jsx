import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Checkbox from "./FormCheckbox";
import styles from "./SurpriseForm.module.scss";
import Modal from "./Modal";

function SurpriseForm1() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");
  const [people, setPeople] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [interests, setInterests] = useState("");
  const [avoid, setAvoid] = useState("");
  const [disabilities, setDisabilities] = useState("");
  const [comments, setComments] = useState("");

  const form = useRef();

  const categories = [
    { label: "Everything", category: "everything", id: "category" },
    { label: "Nature", category: "nature", id: "category" },
    { label: "Culture", category: "culture", id: "category" },
    { label: "Shopping", category: "shopping", id: "category" },
    { label: "Food", category: "food", id: "category" },
    { label: "Nightlife", category: "nightlife", id: "category" },
    { label: "Undecided", category: "undecided", id: "category" },
  ];

  const tourTypes = [
    { label: "International trip" },
    { label: "Domestic trip" },
    { label: "Road trip" },
    { label: "Weekend getaway" },
    { label: "Day trip" },
    { label: "Undecided" },
  ];

  const childFriendly = [{ label: "Yes" }, { label: "No" }];

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c07knsu",
        "template_3zhbdye",
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
    setDuration("");
    setBudget("");
    setPeople("");
    setHobbies("");
    setInterests("");
    setAvoid("");
    setDisabilities("");
    setComments("");
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
          <label>Category of interest (select all that apply)</label>
          <div className={styles["checkbox-container"]}>
            {categories.map((el, i) => (
              <Checkbox
                label={el.label}
                key={i}
                checkedColor="var(--color-red-dark)"
              />
            ))}
          </div>
        </div>
        <div className={styles["form-row"]}>
          <label>Type of tour (select all that apply)</label>
          <div className={styles["checkbox-container"]}>
            {tourTypes.map((el, i) => (
              <Checkbox
                label={el.label}
                key={i}
                id={el.id}
                name={el.id}
                value={el.label}
                checkedColor="var(--color-red-dark)"
              />
            ))}
          </div>
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="duration">Duration</label>
          <select
            id="duration"
            name="duration"
            value={duration}
            onChange={(e) => {
              console.log(e.target.value);
              setDuration(e.target.value);
            }}
          >
            <option value="1 day">1 day</option>
            <option value="2 days">2 days</option>
            <option value="3 days">3 days</option>
            <option value="4 days">4 days</option>
            <option value="5 days">5 days</option>
            <option value="6 days">6 days</option>
            <option value="7 days">7 days</option>
            <option value="8 days">8 days</option>
            <option value="9 days">9 days</option>
            <option value="10 days">10 day</option>
            <option value="11 days">11 days</option>
            <option value="12 days">12 days</option>
            <option value="13 days">13 days</option>
            <option value="14 days">14 days</option>
            <option value="flexible">I'm flexible</option>
          </select>
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="budget">Budget per person</label>
          <select
            id="budget"
            name="budget"
            value={budget}
            onChange={(e) => {
              console.log(e.target.value);
              setBudget(e.target.value);
            }}
          >
            <option value="$500 - $1000">$500 - $1000</option>
            <option value="$1000 - $1500">$1000 - $1500</option>
            <option value="$1500 - $2000">$1500 - $2000</option>
            <option value="$2000 - $2500">$2000 - $2500</option>
            <option value="$2500 - $3000">$2500 - $3000</option>
            <option value="$3000 - $3500">$3000 - $3500</option>
            <option value="$3500 - $4000">$3500 - $4000</option>
            <option value="$4000 - $4500">$4000 - $4500</option>
            <option value="$4500 - $5000">$4500 - $5000</option>
            <option value="No budget">No budget</option>
          </select>
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="people">How many people</label>
          <select
            id="people"
            name="people"
            value={people}
            onChange={(e) => {
              console.log(e.target.value);
              setPeople(e.target.value);
            }}
          >
            <option value="1 person">1</option>
            <option value="2 people">2 </option>
            <option value="3 people">3 </option>
            <option value="4 people">4 </option>
            <option value="5 people">5 </option>
            <option value="6 people">6 </option>
            <option value="7 people">7 </option>
            <option value="8 people">8 </option>
            <option value="9 people">9 </option>
            <option value="10 people">10 </option>
          </select>
        </div>
        <div className={styles["form-row"]}>
          <label>Does it need to be child friendly?</label>
          <div className={`${styles["checkbox-container"]} ${styles.children}`}>
            {childFriendly.map((el, i) => (
              <Checkbox label={el.label} key={i} />
            ))}
          </div>
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="freeform">List of hobbies</label>
          <textarea
            id="freeform"
            rows="3"
            cols="10"
            required
            name="hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          ></textarea>
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="freeform">List of interests</label>
          <textarea
            id="freeform"
            rows="3"
            cols="10"
            required
            name="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          ></textarea>
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="freeform">Things to avoid</label>
          <textarea
            id="freeform"
            rows="3"
            cols="10"
            required
            name="avoid"
            value={avoid}
            onChange={(e) => setAvoid(e.target.value)}
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
            name="disabilities"
            value={disabilities}
            onChange={(e) => setDisabilities(e.target.value)}
          ></textarea>
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="comments">Additional comments</label>
          <textarea
            id="comments"
            rows="7"
            cols="10"
            required
            name="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
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

export default SurpriseForm1;
