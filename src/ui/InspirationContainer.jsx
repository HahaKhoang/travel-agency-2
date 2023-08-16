import { useSearchParams } from "react-router-dom";
import { useInspiration } from "../features/inspiration/useInspiration";
import InspirationCard from "./InspirationCard";
import styles from "./InspirationContainer.module.scss";
import LoadingSpinner from "./LoadingSpinner";
import Select from "./Select";

function InspirationContainer() {
  const { isLoading, inspiration, error } = useInspiration();
  const [searchParams] = useSearchParams();

  if (isLoading) return <LoadingSpinner />;

  // FILTER
  let filterValue = searchParams.get("type") || "all";

  let filteredInspiration;
  if (filterValue === "all") filteredInspiration = inspiration;
  if (filterValue === "nature")
    filteredInspiration = inspiration.filter((tour) => tour.type === "Nature");
  if (filterValue === "shopping")
    filteredInspiration = inspiration.filter(
      (tour) => tour.type === "Shopping"
    );
  if (filterValue === "nightlife")
    filteredInspiration = inspiration.filter(
      (tour) => tour.type === "Nightlife"
    );
  if (filterValue === "culture")
    filteredInspiration = inspiration.filter((tour) => tour.type === "Culture");
  if (filterValue === "food")
    filteredInspiration = inspiration.filter((tour) => tour.type === "Food");

  // SORT
  // const sortBy = searchParams.get("sortBy") || "name-asc";
  // const [field, direction] = sortBy.split("-");
  // const modifier = direction === "asc" ? 1 : -1;
  // const sortedInspiration = filteredInspiration.sort(
  //   (a, b) => (a[field] - b[field]) * modifier
  // );
  return (
    <>
      {/* <Select
        filterField="type"
        filterOptions={[
          { value: "all", label: "All" },
          { value: "asia", label: "Asia" },
          { value: "north-america", label: "North America" },
          { value: "south-america", label: "South America" },
          { value: "europe", label: "Europe" },
          { value: "africa", label: "Africa" },
          { value: "oceania", label: "Oceania" },
        ]}
        sortByOptions={[
          {
            value: "",
            label: "Sort by",
          },
          {
            value: "name-asc",
            label: "Sort by name (A-Z)",
          },
          {
            value: "name-desc",
            label: "Sort by name (Z-A)",
          },
          {
            value: "price-asc",
            label: "Sort by price (low to high)",
          },
          {
            value: "price-desc",
            label: "Sort by price (high to low)",
          },
          {
            value: "duration-asc",
            label: "Sort by duration (low to high)",
          },
          {
            value: "duration-desc",
            label: "Sort by duration (high to low)",
          },
        ]}
      /> */}
      <div className={styles.container}>
        {filteredInspiration.map((el) => (
          <InspirationCard
            name={el.name}
            amount={el.amount}
            location={el.location}
            img={el.image}
            key={el.name}
          />
        ))}
      </div>
    </>
  );
}

export default InspirationContainer;
