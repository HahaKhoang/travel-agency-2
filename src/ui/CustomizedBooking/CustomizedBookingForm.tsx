import { FormProvider, useForm } from "react-hook-form";
import styles from "./CustomizedBookingForm.module.scss";
import Modal from "../../components/Modal";
import FormField from "../../components/FormField";
import FormInput from "../../components/FormInput";
import { useState } from "react";
import customized from "../../assets/img/website/customized.jpg";
import {
  updateAccommodation,
  updateDuration,
  updateFlight,
  updateQuantity,
  updateReservations,
} from "../../store/customizedSlice.tsx";
import { useAppDispatch } from "../../store/hooks";

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
  people: string;
  child: "child-yes" | "child-no";
  countries: string;
  accommodation: "accommodation-yes" | "accommodation-no";
  flight: "flight-yes" | "flight-no";
  reservation: "reservation-yes" | "reservation-no";
  comments?: string;
};

function CustomizedBookingForm() {
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

            <FormField
              label="*Countries of interest:"
              id="countries"
              error={errors?.countries?.message?.toString()}
            >
              <FormInput
                type="textarea"
                id="countries"
                rows={5}
                required={true}
              />
            </FormField>

            <FormField
              label="*Do you need help finding and booking accommodation for an additional fee of $90?"
              id="accommodation"
              error={errors?.accommodation?.message?.toString()}
            >
              <div className={styles["radio-container"]}>
                <FormInput
                  type="radio"
                  id="accommodation"
                  label="Yes"
                  value="accommodation-yes"
                  onClick={() => dispatch(updateAccommodation(true))}
                />
                <FormInput
                  type="radio"
                  id="accommodation"
                  label="No"
                  value="accommodation-no"
                  onClick={() => dispatch(updateAccommodation(false))}
                />
              </div>
            </FormField>

            <FormField
              label="*Do you need help finding and booking flight(s) for an additional fee of $140?"
              id="flight"
              error={errors?.flight?.message?.toString()}
            >
              <div className={styles["radio-container"]}>
                <FormInput
                  type="radio"
                  id="flight"
                  label="Yes"
                  value="flight-yes"
                  onClick={() => dispatch(updateFlight(true))}
                />
                <FormInput
                  type="radio"
                  id="flight"
                  label="No"
                  value="flight-no"
                  onClick={() => dispatch(updateFlight(false))}
                />
              </div>
            </FormField>

            <FormField
              label="*Do you need help booking necessary reservations for an additional fee of $130?"
              id="reservation"
              error={errors?.reservation?.message?.toString()}
            >
              <div className={styles["radio-container"]}>
                <FormInput
                  type="radio"
                  id="reservation"
                  label="Yes"
                  value="reservation-yes"
                  onClick={() => dispatch(updateReservations(true))}
                />
                <FormInput
                  type="radio"
                  id="reservation"
                  label="No"
                  value="reservation-no"
                  onClick={() => dispatch(updateReservations(false))}
                />
              </div>
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

export default CustomizedBookingForm;
