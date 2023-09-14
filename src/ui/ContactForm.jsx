import FormFieldset from "./FormFieldset";
import FormField from "./FormField";
import styles from "./ContactForm.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "./Modal";
import contactModal from "../../public/img/website/contactModal.jpg";

function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const methods = useForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

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
      <FormProvider {...methods}>
        {showModal && (
          <Modal
            img={contactModal}
            header="Thank you for contacting us!"
            text="We will reply as soon as we can (usually within 48 hours)"
            onClose={() => setShowModal(false)}
          />
        )}
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <FormFieldset phone="false">
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
          </FormFieldset>
          <FormField>
            <button className={styles.button}>Submit</button>
          </FormField>
        </form>
      </FormProvider>
    </div>
  );
}

export default ContactForm;
