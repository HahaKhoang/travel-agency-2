import Filter from "./Filter";
import styles from "./Select.module.scss";
import SortBy from "./SortBy";

type OptionsProps = {
  value: string;
  label: string;
};

type SelectProps = {
  filterField: string;
  filterOptions: OptionsProps[];
  sortByOptions: OptionsProps[];
};

function Select({ filterField, filterOptions, sortByOptions }: SelectProps) {
  return (
    <div className={styles.container}>
      <Filter filterField={filterField} options={filterOptions} />
      {sortByOptions && <SortBy options={sortByOptions} />}
    </div>
  );
}

export default Select;
