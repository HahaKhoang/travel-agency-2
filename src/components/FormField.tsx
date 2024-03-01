import { ReactNode } from "react";
import styles from "./FormField.module.scss";

export type FormFieldProps = {
  label: string;
  error?: string | undefined;
  children?: ReactNode;
  id: string;
};

function FormField({ label, children, id, error }: FormFieldProps) {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      {children}
      {error && (
        <div role="alert" className={styles.error}>
          {error}
        </div>
      )}
    </div>
  );
}

export default FormField;
