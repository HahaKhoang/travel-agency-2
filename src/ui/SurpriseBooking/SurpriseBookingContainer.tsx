import SurpriseForm from "../Surprise/SurpriseForm.tsx";
import styles from "./SurpriseBookingContainer.module.scss";
import night from "../../assets/img/website/night.jpg";
import SurpriseBookingSummary from "./SurpriseBookingSummary.tsx";

function SurpriseBookingContainer() {
  return (
    <div style={{ backgroundColor: "var(--color-blue-dark" }}>
      <div className={styles.container}>
        <SurpriseForm />
        <SurpriseBookingSummary
          image={night}
          header="Surprise trip"
          disclaimer="*Flights and accommodation are included in the final price. A 30% deposit is required and the remaining 70% will be invoiced before we send you the final details of your trip."
        />
      </div>
    </div>
  );
}

export default SurpriseBookingContainer;
