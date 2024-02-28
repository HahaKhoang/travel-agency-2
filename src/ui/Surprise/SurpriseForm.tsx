import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../../components/FormInput.tsx";
import styles from "./SurpriseForm.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../../components/Modal.tsx";
import FormField from "../../components/FormField.tsx";
import map from "../../assets/img/website/map.jpg";
import {
  updateDuration,
  updatePrice,
  updateQuantity,
} from "../../features/tours/surpriseSlice.tsx";

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
          className={styles["form-container"]}
          onSubmit={handleSubmit(onSubmit, onError)}
          id="surprise-form"
        >
          <fieldset id="surprise-form" className={styles["fieldset-container"]}>
            <FormField
              label="Category of interest (select all that apply)"
              error={errors?.category}
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

            <FormField
              label="Type of tour (select one):"
              error={errors?.tourType}
            >
              <div className={styles["radio-container"]}>
                {tourTypes.map((el, i) => (
                  <FormInput
                    type="radio"
                    value={el.label}
                    // name="tourType"
                    id={el.label}
                    label={el.label}
                    key={i}
                    {...register("tourType", {
                      required: "Please select one",
                    })}
                  />
                ))}
              </div>
            </FormField>

            <FormField label="Duration">
              <FormInput
                type="select"
                id="duration"
                //   name="duration"
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
              </FormInput>
            </FormField>

            <FormField label="Budget per person">
              <FormInput
                type="select"
                id="budget"
                // name="budget"
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
              </FormInput>
            </FormField>

            <FormField label="How many people?">
              <FormInput
                type="select"
                id="people"
                // name="people"
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
              </FormInput>
            </FormField>

            <FormField
              label="Does it have to be child friendly?"
              error={errors?.child}
            />
            <div className={styles["radio-container"]}>
              {childFriendly.map((el, i) => (
                <FormInput
                  type="radio"
                  value={el.label}
                  //   name="child"
                  id={el.label}
                  label={el.label}
                  key={i}
                  {...register("child", {
                    required: "Please select one",
                  })}
                />
              ))}
            </div>

            <FormField label="List of interests:">
              <FormInput
                type="textarea"
                // name="interests"
                id="interests"
                rows={5}
                {...register("interests")}
              ></FormInput>
            </FormField>

            <FormField label="Things to avoid:">
              <FormInput
                type="textarea"
                // name="avoid"
                id="avoid"
                rows={5}
                {...register("avoid")}
              ></FormInput>
            </FormField>

            <FormField label="Disabilities/concerns to be aware of:">
              <FormInput
                type="textarea"
                // name="disabilities"
                id="disabilities"
                rows={8}
                {...register("disabilities")}
              ></FormInput>
            </FormField>

            <FormField label="Additional comments:">
              <FormInput
                type="textarea"
                // name="comments"
                id="comments"
                rows={8}
                {...register("comments")}
              ></FormInput>
            </FormField>
          </fieldset>
        </form>
      </FormProvider>
    </div>
  );
}

export default SurpriseForm;
