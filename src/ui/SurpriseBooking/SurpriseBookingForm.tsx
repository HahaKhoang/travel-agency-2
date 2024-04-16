import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../../components/FormInput.tsx";
import styles from "./SurpriseBookingForm.module.scss";
import { useState } from "react";
import Modal from "../../components/Modal.tsx";
import FormField from "../../components/FormField.tsx";
import map from "../../assets/img/website/map.webp";
import {
  updateDuration,
  updatePrice,
  updateQuantity,
} from "../../store/surpriseSlice.tsx";
import { useAppDispatch } from "../../store/hooks.tsx";

const categories = [
  { label: "Everything", id: "everything" },
  { label: "Nature", id: "nature" },
  { label: "Culture", id: "culture" },
  { label: "Shopping", id: "shopping" },
  { label: "Food", id: "food" },
  { label: "Nightlife", id: "nightlife" },
  { label: "Undecided", id: "undecided" },
];

const tourTypes = [
  { label: "International trip" },
  { label: "Domestic trip" },
  { label: "Road trip" },
  { label: "Weekend getaway" },
  { label: "Day trip" },
  { label: "Undecided" },
];

type DataType = {
  name: string;
  email: string;
  phone: string;
  category: string[];
  tourType: string;
  duration: string;
  budget: string;
  people: string;
  child: "child-yes" | "child-no";
  interests?: string;
  avoid?: string;
  disabilities?: string;
  comments?: string;
};

function SurpriseBookingForm() {
  const [showModal, setShowModal] = useState(false);
  const methods = useForm<DataType>();
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const dispatch = useAppDispatch();

  function onSubmit(data: DataType) {
    console.log(data);
    setShowModal(true);
    reset();
  }

  function onError(errors: {}) {
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
            alt="A map with travel items on top"
          />
        )}
        <form
          className={styles["form-container"]}
          onSubmit={handleSubmit(onSubmit, onError)}
          id="surprise-form"
        >
          <fieldset id="surprise-form" className={styles["fieldset-container"]}>
            <FormField
              label="*Full name"
              id="name"
              error={errors?.name?.message?.toString()}
            >
              <FormInput type="input" id="name" required={true} />
            </FormField>

            <FormField
              label="*Email address"
              id="email"
              error={errors?.email?.message?.toString()}
            >
              <FormInput type="input" id="email" required={true} />
            </FormField>

            <FormField
              label="*Phone number"
              id="phone"
              error={errors?.phone?.message?.toString()}
            >
              <FormInput type="input" id="phone" required={true} />
            </FormField>

            <FormField
              label="*Category of interest (select all that apply):"
              id="category"
              error={errors?.category?.message?.toString()}
            >
              <div className={styles["checkbox-container"]}>
                {categories.map((el, i) => (
                  <FormInput
                    type="checkbox"
                    id="category"
                    value={el.label}
                    label={el.label}
                    key={i}
                    required={true}
                  />
                ))}
              </div>
            </FormField>

            <FormField
              label="*Type of tour (select one):"
              id="tourType"
              error={errors?.tourType?.message?.toString()}
            >
              <div className={styles["radio-container"]}>
                {tourTypes.map((el, i) => (
                  <FormInput
                    type="radio"
                    id="tourType"
                    value={el.label}
                    label={el.label}
                    key={i}
                    required={true}
                  />
                ))}
              </div>
            </FormField>

            <FormField
              label="Duration"
              id="duration"
              error={errors?.duration?.message?.toString()}
            >
              <FormInput
                type="select"
                id="duration"
                onChange={(e) => dispatch(updateDuration(+e.target.value))}
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
                <option value="0">I'm flexible</option>
              </FormInput>
            </FormField>

            <FormField
              label="Budget per person"
              id="budget"
              error={errors?.budget?.message?.toString()}
            >
              <FormInput
                type="select"
                id="budget"
                onChange={(e) => dispatch(updatePrice(+e.target.value))}
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

            <FormField
              label="How many people?"
              id="people"
              error={errors?.people?.message?.toString()}
            >
              <FormInput
                type="select"
                id="people"
                onChange={(e) => dispatch(updateQuantity(+e.target.value))}
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
              label="*Does it have to be child friendly?"
              id="child"
              error={errors?.child?.message?.toString()}
            >
              <div className={styles["radio-container"]}>
                <FormInput
                  type="radio"
                  id="child"
                  label="Yes"
                  value="child-yes"
                />
                <FormInput
                  type="radio"
                  id="child"
                  label="No"
                  value="child-no"
                />
              </div>
            </FormField>

            <FormField label="List of interests:" id="interests">
              <FormInput
                type="textarea"
                id="interests"
                rows={5}
                required={false}
              />
            </FormField>

            <FormField label="Things to avoid:" id="avoid">
              <FormInput type="textarea" id="avoid" rows={5} required={false} />
            </FormField>

            <FormField
              label="Disabilities/concerns to be aware of:"
              id="disabilities"
            >
              <FormInput
                type="textarea"
                id="disabilities"
                rows={8}
                required={false}
              />
            </FormField>

            <FormField label="Additional comments:" id="comments">
              <FormInput
                type="textarea"
                id="comments"
                rows={8}
                required={false}
              />
            </FormField>
          </fieldset>
          <button className={styles.button}>Book</button>
        </form>
      </FormProvider>
    </div>
  );
}

export default SurpriseBookingForm;
