import { FormProvider, useForm } from "react-hook-form";
import styles from "./CustomizedBookingForm.module.scss";
import Modal from "../../components/Modal";
import FormField from "../../components/FormField";
import FormInput from "../../components/FormInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import customized from "../../assets/img/website/customized.jpg";
import {
  updateAccommodation,
  updateDuration,
  updatePrice,
  updateQuantity,
} from "../../features/tours/customizedSlice";

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

function CustomizedBookingForm() {
  const [showModal, setShowModal] = useState(false);
  const methods = useForm();
  const {
    handleSubmit,
    reset,
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
            header="Thank you for booking a customized tour!"
            text="We will send you a confirmation email with all your details shortly"
            img={customized}
          />
        )}
        <form
          className={styles["form-container"]}
          onSubmit={handleSubmit(onSubmit, onError)}
          id="customized-form"
        >
          <fieldset
            id="customized-form"
            className={styles["fieldset-container"]}
          >
            <FormField
              label="Category of interest (select all that apply)"
              id="interests"
            >
              <div className={styles["checkbox-container"]}>
                {categories.map((el, i) => (
                  <FormInput
                    type="checkbox"
                    id={el.id}
                    name={el.label}
                    value={el.category}
                    label={el.label}
                    key={i}
                  />
                ))}
              </div>
            </FormField>
            <FormField label="Type of tour (select one):" id="tourType">
              <div className={styles["radio-container"]}>
                {tourTypes.map((el, i) => (
                  <FormInput
                    type="radio"
                    value={el.label}
                    id={el.label}
                    label={el.label}
                    key={i}
                  />
                ))}
              </div>
            </FormField>
            <FormField label="Duration" id="duration">
              <FormInput
                type="select"
                id="duration"
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
              </FormInput>
            </FormField>
            <FormField label="How many people?" id="people">
              <FormInput
                type="select"
                id="people"
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
              </FormInput>
            </FormField>

            <FormField
              label="Do you need help finding and booking accommodation for an additional fee of $90?"
              id="accommodation"
            >
              <div className={styles["radio-container"]}>
                <FormInput
                  type="radio"
                  id="accommodation-yes"
                  label="Yes"
                  onClick={() => dispatch(updateAccommodation(true))}
                />
                <FormInput
                  type="radio"
                  id="accommodation-no"
                  label="No"
                  onClick={() => dispatch(updateAccommodation(false))}
                />
              </div>
            </FormField>

            <FormField label="Does it have to be child friendly?" id="child">
              <div className={styles["radio-container"]}>
                <FormInput type="radio" id="child-yes" label="Yes" />
                <FormInput type="radio" id="child-no" label="No" />
              </div>
            </FormField>

            <FormField label="Countries of interest:" id="countries">
              <FormInput type="textarea" id="countries" rows={5} />
            </FormField>

            <FormField label="Additional comments:" id="comments">
              <FormInput type="textarea" id="comments" rows={8}></FormInput>
            </FormField>
          </fieldset>
          <button className={styles.button}>Submit</button>
        </form>
      </FormProvider>
    </div>
  );
}

export default CustomizedBookingForm;
