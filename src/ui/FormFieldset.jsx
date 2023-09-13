import { useFormContext } from "react-hook-form";
import FormField from "./FormField";
import styles from "./FormFieldset.module.scss";

function FormFieldset({ children, form }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <fieldset className={styles.container} id={form}>
      {" "}
      <FormField label="*Full name" error={errors?.name}>
        <input
          type="text"
          name="name"
          id="name"
          {...register("name", { required: "This field is required" })}
        />
      </FormField>
      <FormField label="*Email address" error={errors?.email}>
        <input
          type="text"
          name="email"
          id="email"
          {...register("email", { required: "This field is required" })}
        />
      </FormField>
      <FormField label="*Phone number" error={errors?.phone}>
        <input
          type="tel"
          name="phone"
          id="phone"
          {...register("phone", { required: "This field is required" })}
        />
      </FormField>
      {children}
    </fieldset>
  );
}

export default FormFieldset;
