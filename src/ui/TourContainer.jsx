import TourCard from "./TourCard";
import Filter from "../ui/Filter";
import SortBy from "../ui/SortBy";
import { useTours } from "../features/tours/useTours.js";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useSearchParams } from "react-router-dom";
import styles from "./TourContainer.module.scss";

function TourContainer() {
  const { isLoading, tours, error } = useTours();
  const [searchParams] = useSearchParams();

  if (isLoading) return <LoadingSpinner />;

  // FILTER
  let filterValue = searchParams.get("type") || "all";

  let filteredTours;
  if (filterValue === "all") filteredTours = tours;
  if (filterValue === "nature")
    filteredTours = tours.filter((tour) => tour.type === "Nature");
  if (filterValue === "shopping")
    filteredTours = tours.filter((tour) => tour.type === "Shopping");
  if (filterValue === "nightlife")
    filteredTours = tours.filter((tour) => tour.type === "Nightlife");
  if (filterValue === "culture")
    filteredTours = tours.filter((tour) => tour.type === "Culture");
  if (filterValue === "food")
    filteredTours = tours.filter((tour) => tour.type === "Food");

  // SORT
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedTours = filteredTours.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  console.log(sortedTours);

  return (
    <>
      <Filter
        filterField="type"
        options={[
          { value: "all", label: "All" },
          { value: "nature", label: "Nature" },
          { value: "culture", label: "Culture" },
          { value: "food", label: "Food" },
          { value: "shopping", label: "Shopping" },
          { value: "nightlife", label: "Nightlife" },
        ]}
      />
      <SortBy
        options={[
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
      />
      <section className={styles.container}>
        {sortedTours.map((el, i) => (
          <TourCard
            key={i}
            name={el.name}
            mainImage={el.mainImage}
            shortDesc={el.shortDesc}
            duration={el.duration}
            type={el.type}
            price={el.price}
          />
        ))}
      </section>
    </>
  );
}

export default TourContainer;
