import FormFieldset from "./FormFieldset";
import FormField from "./FormField";

import styles from "./BookingForm.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuantity,
  updateAccommodation,
  updateFlight,
  updateReservations,
} from "../features/tours/tourSlice";
import Modal from "./Modal";
import { useSingleTour } from "../features/tours/useSingleTour";

function BookingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { tour } = useSingleTour();

  const img = tour.imageWelcome;
  const tourName = useSelector((state) => state.tour.name);
  const initialQuantity = useSelector((state) => state.tour.quantity);

  const dispatch = useDispatch();

  function onSubmit(data) {
    console.log(data);
    reset();
    setShowModal(true);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className={styles.container}>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          header={`Thank you for booking ${tourName} with us!`}
          text="We will send you a confirmation email with all your details shortly"
          img={img}
        />
      )}
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit, onError)}
        id="booking-form"
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
          <FormField label="Confirm email address" error={errors?.confirmEmail}>
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
          <FormField label="How many people?">
            <select
              id="people"
              name="people"
              {...register("people", { required: "This field is required" })}
              defaultValue={initialQuantity}
              onChange={(e) => {
                dispatch(updateQuantity(e.target.value));
              }}
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
                  {...register("reservation", { required: "Please check one" })}
                  type="radio"
                  value="yes"
                  id="reservation-yes"
                  name="reservation"
                  onClick={() => dispatch(updateReservations(true))}
                />
                Yes
              </label>
              <label htmlFor="reservation-no" className={styles["radio-label"]}>
                <input
                  {...register("reservation", { required: "Please check one" })}
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
        {/* <FormField>
          <button className={styles.button}>Book</button>
        </FormField> */}
      </form>
    </div>
  );
}

export default BookingForm;
