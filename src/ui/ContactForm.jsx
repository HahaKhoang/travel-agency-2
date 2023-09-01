import { Form } from "react-router-dom";
import styles from "./Form.module.scss";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

function ContactForm() {
  return (
    <Form>
      <div className={styles.container}>
        <div className={styles["form-container"]}>
          <div className={styles["form-row"]}>
            <FormLabel label="Name" htmlFor="name" />
            <FormInput type="text" />
          </div>
          <div className={styles["form-row"]}>
            <FormLabel label="Email" htmlFor="email" />
            <FormInput type="text" />
          </div>
          <div className={styles["form-row"]}>
            <FormLabel label="What can we help you with" htmlFor="help" />
            <FormSelect id="help" name="help">
              <option value="bookTour">I want to book a tour</option>
              <option value="question">I have a question about a tour</option>
              <option value="other">Other</option>
            </FormSelect>
          </div>
          <div className={styles["form-row"]}>
            <FormLabel label="Enter your question here" htmlFor="question" />
            <FormTextarea id="question" rows="7" name="question" />
          </div>
          <div className={styles["form-row"]}>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default ContactForm;
