import TourCard from "./TourCard";
import Filter from "../ui/Filter";
import { useTours } from "../features/tours/useTours.js";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useSearchParams } from "react-router-dom";
import styles from "./TourContainer.module.scss";

function TourContainer() {
  const { isLoading, tours, error } = useTours();
  const [searchParams] = useSearchParams();

  if (isLoading) return <LoadingSpinner />;

  let filterValue = searchParams.get("type") || "all";
  console.log(filterValue);

  let filteredTours;
  if (filterValue === "all") filteredTours = tours;
  if (filterValue === "nature")
    filterValue = tours.filter((tour) => tour.type === "nature");
  if (filterValue === "shopping")
    filterValue = tours.filter((tour) => tour.type === "shopping");
  if (filterValue === "nightlife")
    filterValue = tours.filter((tour) => tour.type === "nightlife");
  if (filterValue === "culture")
    filterValue = tours.filter((tour) => tour.type === "culture");
  if (filterValue === "food")
    filterValue = tours.filter((tour) => tour.type === "food");

  return (
    <>
      <Filter
        filterField="type"
        options={[
          { value: "all", label: "All" },
          { value: "nature", label: "Nature" },
          { value: "food", label: "Food" },
          { value: "shopping", label: "Shopping" },
          { value: "nightlife", label: "Nightlife" },
        ]}
      />
      <section className={styles.container}>
        {tours.map((el, i) => (
          <TourCard
            key={i}
            name={el.name}
            mainImage={el.mainImage}
            shortDesc={el.shortDesc}
            duration={el.duration}
            type={el.type}
          />
        ))}
      </section>
    </>
  );
}

export default TourContainer;
