import CustomizedForm from "./CustomizedForm";
import styles from "./CustomizedBookingContainer.module.scss";
import TripSummary from "./TripSummary";
import customized from "../../public/img/website/customized.jpg";

function CustomizedBookingContainer() {
  return (
    <div style={{ backgroundColor: "var(--color-blue-dark" }}>
      <div className={styles.container}>
        <CustomizedForm />
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
