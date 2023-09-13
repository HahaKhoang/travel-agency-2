import SurpriseForm from "./SurpriseForm";
import styles from "./SurpriseBookingContainer.module.scss";
import TripSummary from "./TripSummary";
import jk4 from "../../public/img/jk4.jpg";

function SurpriseBookingContainer() {
  return (
    <div style={{ backgroundColor: "var(--color-blue-dark" }}>
      <div className={styles.container}>
        <SurpriseForm />
        <TripSummary
          image={jk4}
          header="Surprise trip"
          slice="surprise"
          disclaimer="*Flights and accommodation are included in the final price. A 30% deposit is required and the remaining 70% will be invoiced before we send you the final details of your trip."
        />
      </div>
    </div>
  );
}

export default SurpriseBookingContainer;
