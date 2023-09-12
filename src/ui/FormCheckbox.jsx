import { useState } from "react";
import styles from "./FormCheckbox.module.scss";
import { useFormContext } from "react-hook-form";

function Checkbox({ label, id, name, checkedColor }) {
  const [isChecked, setIsChecked] = useState(false);
  const { register } = useFormContext();

  return (
    <div className={styles.box}>
      <label className={styles.container}>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={label}
          checked={isChecked}
          {...register(`${name}`, { required: "Please select all that apply" })}
          onChange={() => setIsChecked((prev) => !prev)}
          style={{ backgroundColor: isChecked ? checkedColor : "" }}
        />
        <span className={styles.label}>{label}</span>
      </label>
    </div>
  );
}

export default Checkbox;
