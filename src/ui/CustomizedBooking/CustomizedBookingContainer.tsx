import CustomizedBookingForm from "./CustomizedBookingForm.tsx";
import styles from "./CustomizedBookingContainer.module.scss";

import CustomizedBookingSummary from "./CustomizedBookingSummary.tsx";

function CustomizedBookingContainer() {
  return (
    <div style={{ backgroundColor: "var(--color-blue-dark" }}>
      <div className={styles.container}>
        <CustomizedBookingForm />
        <CustomizedBookingSummary />
      </div>
    </div>
  );
}

export default CustomizedBookingContainer;
