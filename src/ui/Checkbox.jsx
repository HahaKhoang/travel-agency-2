import { useState } from "react";
import styles from "./Checkbox.module.scss";

function Checkbox({ label, id, name, checkedColor }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
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
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Checkbox;
