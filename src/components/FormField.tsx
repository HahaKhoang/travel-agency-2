import { ReactNode } from "react";
import styles from "./FormField.module.scss";
import { FieldError } from "react-hook-form";

type FormFieldProps = {
  label: string;
  error?: FieldError;
  children?: ReactNode;
  htmlFor?: string;
};

function FormField({ label, children, htmlFor, error }: FormFieldProps) {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={htmlFor}>
          {label}
        </label>
      )}
      {children}
      {error && (
        <div role="alert" className={styles.error}>
          {error.message}
        </div>
      )}
    </div>
  );
}

export default FormField;
