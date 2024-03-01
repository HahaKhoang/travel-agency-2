import CustomizedBookingForm from "./CustomizedBookingForm.tsx";
import styles from "./CustomizedBookingContainer.module.scss";
import customized from "../../assets/img/website/customized.jpg";
import TripSummary from "../TripSummary.tsx";

function CustomizedBookingContainer() {
  return (
    <div style={{ backgroundColor: "var(--color-blue-dark" }}>
      <div className={styles.container}>
        <CustomizedBookingForm />

        <TripSummary
          image={customized}
          header="Customized tour"
          slice="customized"
          disclaimer="   *Price does not include flight, accommodation, or additional costs.
          The total cost only covers the itinerary and any additional features. "
        />
      </div>
    </div>
  );
}

export default CustomizedBookingContainer;
