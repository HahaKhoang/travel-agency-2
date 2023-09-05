import styles from "./CustomizedForm.module.scss";
import Checkbox from "./FormCheckbox";
import { useForm } from "react-hook-form";
import FormFieldset from "./FormFieldset";
import FormField from "./FormField";

const categories = [
  { label: "Everything", category: "everything", id: "everything" },
  { label: "Nature", category: "nature", id: "nature" },
  { label: "Culture", category: "culture", id: "culture" },
  { label: "Shopping", category: "shopping", id: "shopping" },
  { label: "Food", category: "food", id: "food" },
  { label: "Nightlife", category: "nightlife", id: "nightlife" },
  { label: "Undecided", category: "undecided", id: "undecided" },
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

function CustomizedForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <FormFieldset>
          <FormField label="Name">
            <input
              type="text"
              name="name"
              id="name"
              {...register("name", { required: "This field is required" })}
            />
          </FormField>
          <FormField label="Email address">
            <input
              type="text"
              name="email"
              id="email"
              {...register("email", { required: "This field is required" })}
            />
          </FormField>
          <FormField label="Category of interest:">
            <div className={styles["checkbox-container"]}>
              {categories.map((el, i) => (
                <Checkbox
                  label={el.label}
                  key={i}
                  checkedColor="white"
                  id="category"
                  name="category"
                  {...register("category")}
                />
              ))}
            </div>
          </FormField>
          {/* TYPE OF TOUR CHECKBOX HERE */}
          <FormField label="Duration">
            <select
              id="duration"
              name="duration"
              {...register("duration", { required: "This field is required" })}
            >
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
            </select>
          </FormField>
          <FormField label="How many people?">
            <select
              id="people"
              name="people"
              {...register("people", { required: "This field is required" })}
            >
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
            </select>
          </FormField>
          {/* INSERT CHILD-FRIENDLY CHECKBOX HERE */}
          <FormField label="Countries of interest:">
            <textarea
              name="countries"
              id="countries"
              rows="5"
              {...register("countries")}
            />
          </FormField>
          <FormField label="List of hobbies:">
            <textarea
              name="hobbies"
              id="hobbies"
              rows="5"
              {...register("hobbies")}
            />
          </FormField>
          <FormField label="Things to avoid:">
            <textarea name="avoid" id="avoid" rows="5" {...register("avoid")} />
          </FormField>
          <FormField label="Disabilities/concerns to be aware of:">
            <textarea
              name="disabilities"
              id="disabilities"
              rows="8"
              {...register("disabilities")}
            />
          </FormField>
          <FormField label="Additional comments:">
            <textarea
              name="comments"
              id="comments"
              rows="8"
              {...register("comments")}
            />
          </FormField>
        </FormFieldset>
        <FormField>
          <button className={styles.button} onClick={() => reset()}>
            Submit
          </button>
        </FormField>
      </form>
    </div>
  );
}

export default CustomizedForm;

{
  /* <Form bgColor="var(--color-blue-med)" fontColor="white">
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
</Form> */
}
