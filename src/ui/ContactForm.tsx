import styles from "./ContactForm.module.scss";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { useState } from "react";
import Modal from "../components/Modal.tsx";
import contactModal from "../assets/img/website/contactModal.jpg";
import FormField from "../components/FormField.tsx";
import FormInput from "../components/FormInput.tsx";

function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const methods = useForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  //   const {
  //     register,
  //     formState: { errors },
  //   } = useFormContext();

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
            <FormField label="*Full name">
              <FormInput
                type="input"
                id="name"
                // name="name"
                {...register("name", { required: "This field is required" })}
              />
            </FormField>

            <FormField label="*Email address">
              <FormInput
                type="input"
                id="email"
                // email="name"
                {...register("email", { required: "This field is required" })}
              />
            </FormField>

            <FormField label="How can we help?">
              <FormInput
                type="select"
                id="reason"
                // name="reason"
                {...register("reason", { required: "This field is required" })}
              >
                <option value="bookTour">I want to book a tour</option>
                <option value="question">I have a question about a tour</option>
                <option value="other">Other</option>
              </FormInput>
            </FormField>

            <FormField label="Enter your question here:">
              <FormInput
                type="textarea"
                id="question"
                rows={8}
                // email="name"
                {...register("question", {
                  required: "This field is required",
                })}
              />
            </FormField>
          </fieldset>
          <button className={styles.button}>Submit</button>
        </form>
      </FormProvider>
    </div>
  );
}

export default ContactForm;
