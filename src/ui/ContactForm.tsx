import styles from "./ContactForm.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "../components/Modal.tsx";
import contactModal from "../assets/img/website/contactModal.jpg";
import FormField from "../components/FormField.tsx";
import FormInput from "../components/FormInput.tsx";

function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const methods = useForm();
  const {
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
          onSubmit={handleSubmit(onSubmit, onError)}
          className={styles.form}
        >
          <fieldset id="contact-form" className={styles["fieldset-container"]}>
            <FormField
              label="*Full name"
              id="name"
              error={errors?.name?.message?.toString()}
            >
              <FormInput type="input" id="name" />
            </FormField>

            <FormField
              label="*Email address"
              id="email"
              error={errors?.email?.message?.toString()}
            >
              <FormInput type="input" id="email" />
            </FormField>

            <FormField
              label="How can we help?"
              id="reason"
              error={errors?.reason?.message?.toString()}
            >
              <FormInput type="select" id="reason">
                <option value="bookTour">I want to book a tour</option>
                <option value="question">I have a question about a tour</option>
                <option value="other">Other</option>
              </FormInput>
            </FormField>

            <FormField
              label="Enter your question here:"
              id="question"
              error={errors?.question?.message?.toString()}
            >
              <FormInput type="textarea" id="question" rows={8} />
            </FormField>
          </fieldset>
          <button className={styles.button}>Submit</button>
        </form>
      </FormProvider>
    </div>
  );
}

export default ContactForm;
