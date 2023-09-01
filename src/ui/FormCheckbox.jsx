import { useState } from "react";
import styles from "./FormCheckbox.module.scss";

function Checkbox({ label, id, name, checkedColor }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.box}>
      <label className={styles.container}>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={label}
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          style={{ backgroundColor: isChecked ? checkedColor : "" }}
        />
        <span className={styles.label}>{label}</span>
      </label>
    </div>
  );
}

export default Checkbox;
