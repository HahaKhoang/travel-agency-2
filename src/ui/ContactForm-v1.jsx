import styles from "./ContactForm-v1.module.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";

function ContactForm() {
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [select, setSelect] = useState("");
  // const [message, setMessage] = useState("");

  // const { register, formState, getValues, handleSubmit, reset } = useForm();
  // const { errors } = formState;

  // const form = useRef();

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_nnxnl4p",
  //       "template_wrnr298",
  //       form.current,
  //       "M-heCyvRsVkznWfwP"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );

  //   setName("");
  //   setEmail("");
  //   setSelect("");
  //   setMessage("");
  // }

  // function onSubmit(data) {
  //   console.log(data);
  // }

  return (
    <div className={styles.container}>
      <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="freeform">Enter your question here:</label>
          <textarea
            id="freeform"
            rows="7"
            cols="30"
            required
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={styles["form-row"]}>
          <button
            type="submit"
            className={styles.button}
            onClick={() => setIsOpenModal((show) => !show)}
          >
            Submit
          </button>
        </div>
        {isOpenModal && <Modal onClose={() => setIsOpenModal(false)} />}
      </Form>
    </div>
  );
}

export default ContactForm;
