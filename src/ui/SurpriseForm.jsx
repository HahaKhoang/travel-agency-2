import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Checkbox from "./FormCheckbox";
import styles from "./SurpriseForm.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import FormFieldset from "./FormFieldset";
import FormField from "./FormField";
import { useDispatch } from "react-redux";
import {
  updateDuration,
  updatePrice,
  updateQuantity,
} from "../features/tours/surpriseSlice";
import Modal from "./Modal";
import map from "../../public/img/website/map.jpg";

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

function SurpriseForm() {
  const [showModal, setShowModal] = useState(false);
  const methods = useForm();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = methods;

  const dispatch = useDispatch();

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
            onClose={() => setShowModal(false)}
            header="Thank you for booking a surprise trip with us!"
            text="We will send you a confirmation email with all your details shortly"
            img={map}
          />
        )}
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit, onError)}
          id="surprise-form"
        >
          <FormFieldset>
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
            <FormField
              label="Confirm email address"
              error={errors?.confirmEmail}
            >
              <input
                type="text"
                name="confirmEmail"
                id="confirmEmail"
                {...register("confirmEmail", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().email || "Emails need to match",
                })}
              />
            </FormField>
            <FormField label="Category of interest (select all that apply):">
              <div className={styles["checkbox-container"]}>
                {categories.map((el, i) => (
                  <Checkbox
                    label={el.label}
                    key={i}
                    checkedColor="var(--color-red-dark)"
                    id="category"
                    name="category"
                  />
                ))}
              </div>
            </FormField>
            {/* <FormField label="Category of tour:">
              <div className={styles["checkbox-container"]}>
                {tourTypes.map((el, i) => (
                  <Checkbox
                    label={el.label}
                    key={i}
                    checkedColor="var(--color-red-dark)"
                    id="tourType"
                    name="tourType"
                  />
                ))}
              </div>
            </FormField> */}
            <FormField
              label="Type of tour (select one):"
              error={errors?.tourType}
            >
              <div className={styles["radio-container"]}>
                {tourTypes.map((el) => {
                  return (
                    <>
                      <label
                        htmlFor={el.label}
                        className={styles["radio-label"]}
                      >
                        <input
                          key={el.label}
                          type="radio"
                          value={el.label}
                          name="tourType"
                          id={el.label}
                          {...register("tourType")}
                        />
                        {el.label}
                      </label>
                    </>
                  );
                })}
              </div>
            </FormField>
            {/* TYPE OF TOUR CHECKBOX HERE */}
            <FormField label="Duration">
              <select
                id="duration"
                name="duration"
                {...register("duration", {
                  required: "This field is required",
                })}
                onChange={(e) => dispatch(updateDuration(e.target.value))}
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
            <FormField label="Budget per person">
              <select
                id="budget"
                name="budget"
                {...register("budget", { required: "This field is required" })}
                onChange={(e) => dispatch(updatePrice(e.target.value))}
              >
                <option value={500}>$500</option>
                <option value={1000}>$1000</option>
                <option value={1500}>$1500</option>
                <option value={2000}>$2000</option>
                <option value={2500}>$2500</option>
                <option value={3000}>$3000</option>
                <option value={3500}>$3500</option>
                <option value={4000}>$4000</option>
                <option value={4500}>$4500</option>
                <option value={5000}>$5000+</option>
              </select>
            </FormField>
            <FormField label="How many people?">
              <select
                id="people"
                name="people"
                {...register("people", { required: "This field is required" })}
                onChange={(e) => dispatch(updateQuantity(e.target.value))}
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
            <FormField label="List of interests:">
              <textarea
                name="interests"
                id="interests"
                rows="5"
                {...register("interests")}
              />
            </FormField>
            <FormField label="Things to avoid:">
              <textarea
                name="avoid"
                id="avoid"
                rows="5"
                {...register("avoid")}
              />
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
        </form>
      </FormProvider>
    </div>
  );
}

export default SurpriseForm;

{
  /* <Form bgColor="var(--color-blue-med)" fontColor="white">
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
</Form> */
}
