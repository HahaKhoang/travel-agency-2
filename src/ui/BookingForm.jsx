import FormFieldset from "./FormFieldset";
import FormField from "./FormField";
import styles from "./BookingForm.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAccommodation, updateFlight } from "../features/tours/tourSlice";

function BookingForm() {
  const { register, handleSubmit } = useForm();
  const [isChecked, setIsChecked] = useState(false);
  const [accommodation, setAccommodation] = useState(false);

  const quantity = useSelector((state) => state.tour.quantity);

  const dispatch = useDispatch();

  function accommodationYes() {
    setAccommodation(true);
    dispatch(updateAccommodation(true));
  }

  function accommodationNo() {
    setAccommodation(false);
    dispatch(updateAccommodation(false));
  }

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
          <FormField label="Confirm email address">
            <input
              type="text"
              name="email"
              id="email"
              {...register("email", { required: "This field is required" })}
            />
          </FormField>
          <FormField label="Phone number">
            <input
              type="tel"
              name="phone"
              id="phone"
              {...register("phone", { required: "This field is required" })}
            />
          </FormField>
          <FormField label="How many people?">
            <select
              id="people"
              name="people"
              {...register("people", { required: "This field is required" })}
              defaultValue={quantity}
              onChange={() => dispatch(increaseTourQuantity(1))}
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
          <FormField label="Do you need help finding and booking accommodation for an additional fee of $90?">
            <div className={styles["radio-container"]}>
              <label
                htmlFor="accommodation-yes"
                className={styles["radio-label"]}
              >
                <input
                  {...register("accommodation", { required: true })}
                  type="radio"
                  value="yes"
                  id="accommodation-yes"
                  name="accommodation"
                  onClick={accommodationYes}
                />
                Yes
              </label>
              <label
                htmlFor="accommodation-no"
                className={styles["radio-label"]}
              >
                <input
                  {...register("accommodation", { required: true })}
                  type="radio"
                  value="no"
                  id="accommodation-no"
                  name="accommodation"
                  onClick={accommodationNo}
                />
                No
              </label>
            </div>
          </FormField>
          <FormField label="Do you need help finding and booking flight(s) for an additional fee of $140?">
            <div className={styles["radio-container"]}>
              <label htmlFor="flight-yes" className={styles["radio-label"]}>
                <input
                  {...register("flight", { required: true })}
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
                  {...register("flight", { required: true })}
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
          <FormField label="Do you need help booking necessary reservations for an additional fee of $130?">
            <div className={styles["radio-container"]}>
              <label
                htmlFor="reservation-yes"
                className={styles["radio-label"]}
              >
                <input
                  {...register("reservation", { required: true })}
                  type="radio"
                  value="yes"
                  id="reservation-yes"
                  name="reservation"
                />
                Yes
              </label>
              <label htmlFor="reservation-no" className={styles["radio-label"]}>
                <input
                  {...register("reservation", { required: true })}
                  type="radio"
                  value="no"
                  id="reservation-no"
                  name="reservation"
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
        <FormField>
          <button className={styles.button}>Book</button>
        </FormField>
      </form>
    </div>
  );
}

export default BookingForm;
