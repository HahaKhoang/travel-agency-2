import styles from "./CustomizedForm.module.scss";
import Checkbox from "./FormCheckbox";
import { FormProvider, useForm } from "react-hook-form";
import FormFieldset from "./FormFieldset";
import FormField from "./FormField";
import { useDispatch } from "react-redux";
import {
  updateAccommodation,
  updateFlight,
  updateReservations,
  updateQuantity,
  updateDuration,
} from "../features/tours/customizedSlice";
import { Fragment, useState } from "react";
import Modal from "./Modal";
import customized from "../../public/img/website/customized.jpg";

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
            img={customized}
            header="Thank you for booking a customized tour!"
            text="We will send you a confirmation email shortly!"
            onClose={() => setShowModal(false)}
          />
        )}
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit, onError)}
          id="customized-form"
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
            <FormField label="Phone number" error={errors?.phone}>
              <input
                type="tel"
                name="phone"
                id="phone"
                {...register("phone", { required: "This field is required" })}
              />
            </FormField>
            <FormField
              label="Category of interest (select all that apply):"
              error={errors?.category}
            >
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
            <FormField
              label="Type of tour (select one):"
              error={errors?.tourType}
            >
              <div className={styles["radio-container"]}>
                {tourTypes.map((el) => {
                  return (
                    <Fragment key={el.label}>
                      <label
                        htmlFor={el.label}
                        className={styles["radio-label"]}
                      >
                        <input
                          type="radio"
                          value={el.label}
                          name="tourType"
                          id={el.label}
                          {...register("tourType", {
                            required: "Please select one",
                          })}
                        />
                        {el.label}
                      </label>
                    </Fragment>
                  );
                })}
              </div>
            </FormField>
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
            <FormField
              label="Does it have to be child friendly?"
              error={errors?.child}
            >
              <div className={styles["radio-container"]}>
                {childFriendly.map((el) => {
                  return (
                    <Fragment key={el.label}>
                      <label
                        htmlFor={el.label}
                        className={styles["radio-label"]}
                      >
                        <input
                          type="radio"
                          value={el.label}
                          name="child"
                          id={el.label}
                          {...register("child", {
                            required: "Please select one",
                          })}
                        />
                        {el.label}
                      </label>
                    </Fragment>
                  );
                })}
              </div>
            </FormField>
            <FormField label="Countries of interest:" error={errors?.countries}>
              <textarea
                name="countries"
                id="countries"
                rows="5"
                {...register("countries", {
                  required: "Please provide requested information",
                })}
              />
            </FormField>
            <FormField label="List of hobbies:" error={errors?.hobbies}>
              <textarea
                name="hobbies"
                id="hobbies"
                rows="5"
                {...register("hobbies", {
                  required: "Please provide requested information",
                })}
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
            <FormField
              label="Do you need help finding and booking accommodation for an additional fee of $90?"
              error={errors?.accommodation}
            >
              <div className={styles["radio-container"]}>
                <label
                  htmlFor="accommodation-yes"
                  className={styles["radio-label"]}
                >
                  <input
                    {...register("accommodation", {
                      required: "Please check one",
                    })}
                    type="radio"
                    value="yes"
                    id="accommodation-yes"
                    name="accommodation"
                    onClick={() => dispatch(updateAccommodation(true))}
                  />
                  Yes
                </label>
                <label
                  htmlFor="accommodation-no"
                  className={styles["radio-label"]}
                >
                  <input
                    {...register("accommodation", {
                      required: "Please check one",
                    })}
                    type="radio"
                    value="no"
                    id="accommodation-no"
                    name="accommodation"
                    onClick={() => dispatch(updateAccommodation(false))}
                  />
                  No
                </label>
              </div>
            </FormField>
            <FormField
              label="Do you need help finding and booking flight(s) for an additional fee of $140?"
              error={errors?.flight}
            >
              <div className={styles["radio-container"]}>
                <label htmlFor="flight-yes" className={styles["radio-label"]}>
                  <input
                    {...register("flight", { required: "Please check one" })}
                    type="radio"
                    value="yes"
                    id="flight-yes"
                    name="flight"
                    onClick={() => dispatch(updateFlight(true))}
                  />
                  Yes
                </label>
                <label htmlFor="flight-no" className={styles["radio-label"]}>
                  <input
                    {...register("flight", { required: "Please check one" })}
                    type="radio"
                    value="no"
                    id="flight-no"
                    name="flight"
                    onClick={() => dispatch(updateFlight(false))}
                  />
                  No
                </label>
              </div>
            </FormField>
            <FormField
              label="Do you need help booking necessary reservations for an additional fee of $130?"
              error={errors?.reservation}
            >
              <div className={styles["radio-container"]}>
                <label
                  htmlFor="reservation-yes"
                  className={styles["radio-label"]}
                >
                  <input
                    {...register("reservation", {
                      required: "Please check one",
                    })}
                    type="radio"
                    value="yes"
                    id="reservation-yes"
                    name="reservation"
                    onClick={() => dispatch(updateReservations(true))}
                  />
                  Yes
                </label>
                <label
                  htmlFor="reservation-no"
                  className={styles["radio-label"]}
                >
                  <input
                    {...register("reservation", {
                      required: "Please check one",
                    })}
                    type="radio"
                    value="no"
                    id="reservation-no"
                    name="reservation"
                    onClick={() => dispatch(updateReservations(false))}
                  />
                  No
                </label>
              </div>
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

export default CustomizedForm;
