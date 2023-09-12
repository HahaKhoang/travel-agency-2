import TestFieldset from "./FormFieldset";
import FormField from "./FormField";
import styles from "./ContactForm.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "./Modal";
import contactModal from "../../public/img/website/contactModal.jpg";

function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
    setShowModal(true);
    reset();
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className={styles.container}>
      {showModal && (
        <Modal
          img={contactModal}
          header="Thank you for contacting us!"
          text="We will reply as soon as we can (usually within 48 hours)"
          onClose={() => setShowModal(false)}
        />
      )}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <TestFieldset>
          <FormField label="Full name" error={errors?.name}>
            <input
              type="text"
              name="name"
              id="name"
              {...register("name", { required: "This field is required" })}
            />
          </FormField>
          <FormField label="Email address" error={errors?.email}>
            <input
              type="text"
              name="email"
              id="email"
              {...register("email", { required: "This field is required" })}
            />
          </FormField>
          <FormField label="How can we help?">
            <select id="reason" name="reason" {...register("reason")}>
              <option value="bookTour">I want to book a tour</option>
              <option value="question">I have a question about a tour</option>
              <option value="other">Other</option>
            </select>
          </FormField>
          <FormField label="Enter your question here:">
            <textarea
              name="question"
              id="question"
              rows="8"
              {...register("question")}
            />
          </FormField>
        </TestFieldset>
        <FormField>
          <button className={styles.button}>Submit</button>
        </FormField>
      </form>
    </div>
  );
}

export default ContactForm;
