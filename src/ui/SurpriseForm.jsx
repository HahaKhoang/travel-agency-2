import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Checkbox from "./FormCheckbox";
import styles from "./SurpriseForm.module.scss";
import Modal from "./Modal";
import Form from "./Form";
import FormRow from "./FormRow";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

function SurpriseForm() {
  const categories = [
    { label: "Everything", category: "everything", id: "category" },
    { label: "Nature", category: "nature", id: "category" },
    { label: "Culture", category: "culture", id: "category" },
    { label: "Shopping", category: "shopping", id: "category" },
    { label: "Food", category: "food", id: "category" },
    { label: "Nightlife", category: "nightlife", id: "category" },
    { label: "Undecided", category: "undecided", id: "category" },
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
        <FormInput type="text" id="name" name="name" />
      </FormRow>
      <FormRow label="Email address" htmlFor="email">
        <FormInput type="text" id="email" name="email" />
      </FormRow>
      <FormRow
        label="Category of interest (Select all that apply)"
        htmlFor="category"
      >
        <div className={styles["checkbox-container"]}>
          {categories.map((el, i) => (
            <FormCheckbox
              label={el.label}
              key={i}
              id={el.id}
              name={el.id}
              checkedColor="var(--color-red-dark)"
            />
          ))}
        </div>
      </FormRow>
      <FormRow label="Type of tour (Select all that apply)" htmlFor="trip">
        <div className={styles["checkbox-container"]}>
          {tourTypes.map((el, i) => (
            <FormCheckbox
              label={el.label}
              key={i}
              id={el.id}
              name={el.id}
              checkedColor="var(--color-red-dark)"
            />
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
      <FormRow label="Budget" htmlFor="budget">
        <FormSelect id="budget" name="budget">
          <option value="$500 - $1000">$500 - $1000</option>
          <option value="$1000 - $1500">$1000 - $1500</option>
          <option value="$1500 - $2000">$1500 - $2000</option>
          <option value="$2000 - $2500">$2000 - $2500</option>
          <option value="$2500 - $3000">$2500 - $3000</option>
          <option value="$3000 - $3500">$3000 - $3500</option>
          <option value="$3500 - $4000">$3500 - $4000</option>
          <option value="$4000 - $4500">$4000 - $4500</option>
          <option value="$4500 - $5000">$4500 - $5000</option>
          <option value="No budget">No budget</option>
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
      <FormRow label="List of interests:">
        <FormTextarea rows="5" id="interests" name="interests" />
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

export default SurpriseForm;
