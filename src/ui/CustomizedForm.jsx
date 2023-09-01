import styles from "./CustomizedForm.module.scss";
import Checkbox from "./FormCheckbox";
import Form from "./Form";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import FormRow from "./FormRow";

function CustomizedForm() {
  const categories = [
    { label: "Everything", category: "everything" },
    { label: "Nature", category: "nature" },
    { label: "Culture", category: "culture" },
    { label: "Shopping", category: "shopping" },
    { label: "Food", category: "food" },
    { label: "Nightlife", category: "nightlife" },
    { label: "Undecided", category: "undecided" },
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

  return (
    <Form bgColor="var(--color-blue-med)" fontColor="white">
      <FormRow label="Name" htmlFor="name">
        <FormInput id="name" name="name" type="text" />
      </FormRow>
      <FormRow label="Email address" htmlFor="email">
        <FormInput id="email" name="email" type="text" />
      </FormRow>
      <FormRow label="Category of Interest (select all that apply)">
        <div className={styles["checkbox-container"]}>
          {categories.map((el, i) => (
            <Checkbox
              label={el.label}
              key={i}
              checkedColor="white"
              id="category"
              name="category"
            />
          ))}
        </div>
      </FormRow>
      <FormRow label="Type of tour (select all that apply)">
        <div className={styles["checkbox-container"]}>
          {tourTypes.map((el, i) => (
            <Checkbox label={el.label} key={i} id="trip" name="trip" />
          ))}
        </div>
      </FormRow>
      <FormRow label="Duration" htmlFor="duration">
        <FormSelect id="duration" name="duration">
          <option value="1">1 day</option>
          <option value="2">2 days</option>
          <option value="3">3 days</option>
          <option value="4">4 days</option>
          <option value="5">5 days</option>
          <option value="6">6 days</option>
          <option value="7">7 days</option>
          <option value="8">8 days</option>
          <option value="9">9 days</option>
          <option value="10">10 day</option>
          <option value="11">11 days</option>
          <option value="12">12 days</option>
          <option value="13">13 days</option>
          <option value="14">14 days</option>
          <option value="flexible">I'm flexible</option>
        </FormSelect>
      </FormRow>
      <FormRow label="How many people" htmlFor="people">
        <FormSelect id="people" name="people">
          <option value="1">1</option>
          <option value="2">2 </option>
          <option value="3">3 </option>
          <option value="4">4 </option>
          <option value="5">5 </option>
          <option value="6">6 </option>
          <option value="7">7 </option>
          <option value="8">8 </option>
          <option value="9">9 </option>
          <option value="10">10 </option>
        </FormSelect>
      </FormRow>
      <FormRow label="Does it need to be child friendly?">
        <div className={`${styles["checkbox-container"]} ${styles.children}`}>
          {childFriendly.map((el, i) => (
            <Checkbox label={el.label} key={i} id="child" name="child" />
          ))}
        </div>
      </FormRow>
      <FormRow label="Countries of interest:">
        <FormTextarea rows="5" id="country" name="country" />
      </FormRow>
      <FormRow label="List of hobbies:">
        <FormTextarea rows="5" id="hobbies" name="hobbies" />
      </FormRow>
      <FormRow label="Things to avoid:">
        <FormTextarea rows="5" id="avoid" name="avoid" />
      </FormRow>
      <FormRow label="Disabilities/concerns to be aware of:">
        <FormTextarea rows="7" id="disabilities" name="disabilities" />
      </FormRow>
      <FormRow label="Additional comments:">
        <FormTextarea rows="7" id="comments" name="comments" />
      </FormRow>
    </Form>
  );
}

export default CustomizedForm;
