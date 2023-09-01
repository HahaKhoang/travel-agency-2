import styles from "./Form.module.scss";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import FormSelect from "./FormSelect";

function Form() {
  return (
    <div className={styles.container}>
      <div className={styles["form-container"]}>
        <div className={styles["form-row"]}>
          <FormLabel label="Name" />
          <FormInput type="text" />
        </div>
        <div className={styles["form-row"]}>
          <FormLabel label="Email" />
          <FormInput type="text" />
        </div>
        <div className={styles["form-row"]}>
          <FormLabel label="What can we help you with" />
          <FormSelect id="help" name="help">
            <option value="bookTour">I want to book a tour</option>
            <option value="question">I have a question about a tour</option>
            <option value="other">Other</option>
          </FormSelect>
        </div>
      </div>
    </div>
  );
}

export default Form;
