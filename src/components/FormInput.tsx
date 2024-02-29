import { useFormContext } from "react-hook-form";
import styles from "./FormInput.module.scss";
import { ComponentPropsWithoutRef, useState, type ReactNode } from "react";

type FormProps = {
  id: string;
  name?: string;
  value?: string;
  label?: string;
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

type FormSelectProps = {
  type: "select";
  id: string;
  name: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"select">;

type FormTextareaProps = {
  type: "textarea";
  name: string;
  label?: string;
  id: string;
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
  const {
    register,
    formState: { errors },
  } = useFormContext();

  if (props.type === "checkbox") {
    return (
      <div className={styles["checkbox-container"]}>
        <input
          type="checkbox"
          id={props.id}
          name={props.name}
          value={props.label}
        ></input>
        <label>{props.label}</label>
      </div>
    );
  }

  if (props.type === "radio") {
    return (
      <div className={styles["radio-container"]}>
        <label className={styles["radio-label"]}>
          <input
            type="radio"
            id={props.id}
            name={props.name}
            value={props.label}
          />
          {props.label}
        </label>
      </div>
    );
  }

  if (props.type === "select") {
    return (
      <div className={styles["input-container"]}>
        <select id={props.id} name={props.name}>
          {props.children}
        </select>
      </div>
    );
  }

  if (props.type === "textarea") {
    return (
      <div className={styles["input-container"]}>
        <label>{props.label}</label>
        <textarea name={props.name} id={props.id} rows={props.rows} />
      </div>
    );
  }
  return (
    <div className={styles["input-container"]}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        value={props.value}
        {...register(`${props.name}`, { required: "This field is required" })}
      ></input>
    </div>
  );
}

export default FormInput;
