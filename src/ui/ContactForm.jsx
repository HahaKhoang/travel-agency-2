import TestFieldset from "./TestFieldset";
import TestField from "./TestField";
import styles from "./ContactForm.module.scss";
import { useForm } from "react-hook-form";

function ContactForm() {
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
        <TestFieldset>
          <TestField label="Name">
            <input type="text" name="name" id="name" {...register("name")} />
          </TestField>
          <TestField label="Email address">
            <input type="text" name="email" id="email" {...register("email")} />
          </TestField>
          <TestField label="How can we help?">
            <select id="reason" name="reason" {...register("reason")}>
              <option value="bookTour">I want to book a tour</option>
              <option value="question">I have a question about a tour</option>
              <option value="other">Other</option>
            </select>
          </TestField>
          <TestField label="Enter your question here:">
            <textarea
              name="question"
              id="question"
              rows="8"
              {...register("question")}
            />
          </TestField>
        </TestFieldset>
        <TestField>
          <button className={styles.button}>Submit</button>
        </TestField>
      </form>
    </div>
  );
}

export default ContactForm;
