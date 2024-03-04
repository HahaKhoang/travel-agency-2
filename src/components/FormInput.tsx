import { useFormContext } from "react-hook-form";
import styles from "./FormInput.module.scss";
import { ComponentPropsWithoutRef, type ReactNode } from "react";

type FormProps = {
  id: string;
  value?: string;
  label?: string;
  name?: string;
  required?: boolean;
};

type FormInputProps = FormProps & {
  type: "input";
} & ComponentPropsWithoutRef<"input">;

type FormCheckBoxProps = FormProps & {
  type: "checkbox";
} & ComponentPropsWithoutRef<"input">;

type FormRadioProps = FormProps & {
  type: "radio";
} & ComponentPropsWithoutRef<"input">;

type FormSelectProps = FormProps & {
  type: "select";
  children: ReactNode;
} & ComponentPropsWithoutRef<"select">;

type FormTextareaProps = FormProps & {
  type: "textarea";
  rows: number;
} & ComponentPropsWithoutRef<"textarea">;

function FormInput(
  props:
    | FormInputProps
    | FormCheckBoxProps
    | FormRadioProps
    | FormSelectProps
    | FormTextareaProps
) {
  const { register } = useFormContext();

  if (props.type === "checkbox") {
    return (
      <label className={styles["checkbox-container"]}>
        {props.required ? (
          <input
            type="checkbox"
            id={props.id}
            value={props.label}
            {...register(`${props.id}`, { required: "Please select one" })}
          />
        ) : (
          <input
            type="checkbox"
            id={props.id}
            value={props.label}
            {...register(`${props.id}`)}
          />
        )}
        {props.label}
      </label>
    );
  }

  if (props.type === "radio") {
    return (
      <div className={styles["radio-container"]}>
        <label className={styles["radio-label"]}>
          <input
            className={styles["radio-button"]}
            type="radio"
            id={props.id}
            value={props.label}
            {...register(`${props.id}`, { required: "Please select one" })}
            {...props}
          />
          {props.label}
        </label>
      </div>
    );
  }

  if (props.type === "select") {
    return (
      <div className={styles["input-container"]}>
        <select
          id={props.id}
          {...register(`${props.id}`, { required: "This field is required" })}
          {...props}
        >
          {props.children}
        </select>
      </div>
    );
  }

  if (props.type === "textarea") {
    return (
      <div className={styles["input-container"]}>
        <label>{props.label}</label>
        {props.required ? (
          <textarea
            id={props.id}
            rows={props.rows}
            {...register(`${props.id}`, {
              required: "Please provide requested information",
            })}
          />
        ) : (
          <textarea
            id={props.id}
            rows={props.rows}
            {...register(`${props.id}`)}
          />
        )}
      </div>
    );
  }
  return (
    <div className={styles["input-container"]}>
      <label htmlFor={props.id}>{props.label}</label>
      {props.required ? (
        <input
          id={props.id}
          value={props.value}
          {...register(`${props.id}`, { required: "This field is required" })}
        />
      ) : (
        <input id={props.id} value={props.value} {...register(`${props.id}`)} />
      )}
    </div>
  );
}

export default FormInput;
