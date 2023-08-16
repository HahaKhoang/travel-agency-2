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
    filteredTours = tours.filter((tour) => tour.type === "Nature");
  if (filterValue === "shopping")
    filteredTours = tours.filter((tour) => tour.type === "Shopping");
  if (filterValue === "nightlife")
    filteredTours = tours.filter((tour) => tour.type === "Nightlife");
  if (filterValue === "culture")
    filteredTours = tours.filter((tour) => tour.type === "Culture");
  if (filterValue === "food")
    filteredTours = tours.filter((tour) => tour.type === "Food");

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
      <section className={styles.container}>
        {filteredTours.map((el, i) => (
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
