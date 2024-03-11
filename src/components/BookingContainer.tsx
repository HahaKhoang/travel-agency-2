import styles from "./BookingContainer.module.scss";
import { ReactNode } from "react";

type BookingContainerProps = {
  children: ReactNode;
};

function BookingContainer({ children }: BookingContainerProps) {
  return (
    <div style={{ backgroundColor: "var(--color-blue-dark" }}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default BookingContainer;
