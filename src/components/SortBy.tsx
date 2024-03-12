import { useSearchParams } from "react-router-dom";
import styles from "./SortBy.module.scss";
import { type ChangeEvent } from "react";

type SortByProps = {
  options: { value: string; label: string }[];
};

function SortBy({ options }: SortByProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <select className={styles.select} onChange={handleChange} value={sortBy}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SortBy;
