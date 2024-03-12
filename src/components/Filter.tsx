import { useSearchParams } from "react-router-dom";
import styles from "./Filter.module.scss";

type FilterOptionsProps = {
  value: string;
  label: string;
};

type FilterProps = {
  filterField: string;
  options: FilterOptionsProps[];
};

function Filter({ filterField, options }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value: string) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.container}>
      <p className={styles.filter}>Filter by:</p>
      {options.map((option) => (
        <button
          className={
            option.value === currentFilter
              ? `${styles.button} ${styles.active}`
              : `${styles.button}`
          }
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
