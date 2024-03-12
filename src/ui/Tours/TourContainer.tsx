import TourCard from "./TourCard";
import Select from "../../components/Select.tsx";
import { useTours } from "../../features/tours/useTours.tsx";
import LoadingSpinner from "../../components/LoadingSpinner.tsx";
import { useSearchParams } from "react-router-dom";
import styles from "./TourContainer.module.scss";

function TourContainer() {
  const { isLoading, tours } = useTours();
  const [searchParams] = useSearchParams();

  if (isLoading) return <LoadingSpinner />;

  // FILTER
  let filterValue = searchParams.get("type") || "all";

  let filteredTours;
  if (filterValue === "all") filteredTours = tours;
  if (filterValue === "nature")
    filteredTours = tours?.filter((tour) => tour.category === "nature");
  if (filterValue === "shopping")
    filteredTours = tours?.filter((tour) => tour.category === "shopping");
  if (filterValue === "nightlife")
    filteredTours = tours?.filter((tour) => tour.category === "nightlife");
  if (filterValue === "culture")
    filteredTours = tours?.filter((tour) => tour.category === "culture");
  if (filterValue === "food")
    filteredTours = tours?.filter((tour) => tour.category === "food");
  if (filterValue === "everything")
    filteredTours = tours?.filter((tour) => tour.category === "everything");

  // SORT
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  function compare(a: { tourName: string }, b: { tourName: string }) {
    if (a["tourName"] < b["tourName"]) {
      return -1 * modifier;
    }
    if (a["tourName"] > b["tourName"]) {
      return 1 * modifier;
    }
    return 0;
  }

  const sortedTours =
    field === "name"
      ? filteredTours?.sort(compare)
      : filteredTours?.sort((a, b) => (a[field] - b[field]) * modifier);

  return (
    <>
      <Select
        filterField="type"
        filterOptions={[
          { value: "all", label: "All" },
          { value: "nature", label: "Nature" },
          { value: "culture", label: "Culture" },
          { value: "food", label: "Food" },
          { value: "shopping", label: "Shopping" },
          { value: "nightlife", label: "Nightlife" },
          { value: "everything", label: "Everything" },
        ]}
        sortByOptions={[
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
        {sortedTours?.map((el, i) => (
          <TourCard
            key={i}
            name={el.tourName}
            mainImage={el.imageWelcome}
            shortDesc={el.welcomeDesc}
            duration={el.duration}
            category={el.category}
            price={el.price}
            country={el.country}
            slug={el.slug}
            id={el.id}
          />
        ))}
      </section>
    </>
  );
}

export default TourContainer;
