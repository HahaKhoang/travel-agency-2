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
  let filterValue = searchParams.get("destination") || "all";

  let filteredInspiration;
  if (filterValue === "all") filteredInspiration = inspiration;
  if (filterValue === "asia")
    filteredInspiration = inspiration.filter(
      (tour) => tour.continent === "asia"
    );
  if (filterValue === "north-america")
    filteredInspiration = inspiration.filter(
      (tour) => tour.continent === "north-america"
    );
  if (filterValue === "south-america")
    filteredInspiration = inspiration.filter(
      (tour) => tour.continent === "south-america"
    );
  if (filterValue === "europe")
    filteredInspiration = inspiration.filter(
      (tour) => tour.continent === "europe"
    );
  if (filterValue === "africa")
    filteredInspiration = inspiration.filter(
      (tour) => tour.continent === "africa"
    );
  if (filterValue === "oceania")
    filteredInspiration = inspiration.filter(
      (tour) => tour.continent === "oceania"
    );

  return (
    <>
      <Select
        filterField="destination"
        filterOptions={[
          { value: "all", label: "All" },
          { value: "asia", label: "Asia" },
          { value: "north-america", label: "North America" },
          { value: "south-america", label: "South America" },
          { value: "europe", label: "Europe" },
          { value: "africa", label: "Africa" },
          { value: "oceania", label: "Oceania" },
        ]}
      />
      <div className={styles.container}>
        {filteredInspiration.map((el) => (
          <InspirationCard
            name={el.name}
            location={el.location}
            img={el.image}
            key={el.id}
            continent={el.continent}
            slug={el.slug}
          />
        ))}
      </div>
    </>
  );
}

export default InspirationContainer;
