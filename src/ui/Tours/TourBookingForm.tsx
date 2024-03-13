import { FormProvider, useForm } from "react-hook-form";
import FormField from "../../components/FormField";
import FormInput from "../../components/FormInput";
import Modal from "../../components/Modal";
import styles from "./TourBookingForm.module.scss";
import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  updateAccommodation,
  updateFlight,
  updateQuantity,
  updateReservations,
} from "../../store/tourSlice.tsx";

type DataType = {
  name: string;
  email: string;
  phone: string;
  people: string;
  accommodation: "accommodation-yes" | "accommodation-no";
  flight: "flight-yes" | "flight-no";
  reservation: "reservation-yes" | "reservation-no";
};

type TourBookingFormProps = {
  tour: {
    tourName: string;
    imageWelcome: string;
  };
};

function TourBookingForm({ tour }: TourBookingFormProps) {
  const [showModal, setShowModal] = useState(false);
  const methods = useForm<DataType>();
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;
  const { tourName, imageWelcome } = tour;

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
            header={`Thank you for booking ${tourName} with us!`}
            text="We will send you a confirmation email with all your details shortly"
            img={imageWelcome}
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
          </fieldset>
          <button className={styles.button}>Book</button>
        </form>
      </FormProvider>
    </div>
  );
}

export default TourBookingForm;
