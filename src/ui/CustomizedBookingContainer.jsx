import CustomizedForm from "./CustomizedForm";
import styles from "./CustomizedBookingContainer.module.scss";
import CustomizedBookingSummary from "./CustomizedBookingSummary";

function CustomizedBookingContainer() {
  return (
    <div style={{ backgroundColor: "var(--color-blue-light" }}>
      <div className={styles.container}>
        <CustomizedBookingSummary />
        <CustomizedForm />
      </div>
    </div>
  );
}

export default CustomizedBookingContainer;
