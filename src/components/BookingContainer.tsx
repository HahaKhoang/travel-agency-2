import { ReactNode } from "react";
import styles from "./BookingContainer.module.scss";

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
