import Filter from "./Filter";
import styles from "./Select.module.scss";
import SortBy from "./SortBy";

function Select({ filterField, filterOptions, sortByOptions }) {
  return (
    <div className={styles.container}>
      <Filter filterField={filterField} options={filterOptions} />
      <SortBy options={sortByOptions} />
    </div>
  );
}

export default Select;
