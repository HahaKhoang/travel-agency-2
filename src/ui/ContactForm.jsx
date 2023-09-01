import styles from "./ContactForm.module.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";

function ContactForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  return (
    <div className={styles.container}>
      <Form className={styles.form}>
        <div className={styles["form-row"]}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="email">Email address</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="reason">What can we help you with:</label>
          <select id="reason" name="select">
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
          ></textarea>
        </div>
        <div className={styles["form-row"]}>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
