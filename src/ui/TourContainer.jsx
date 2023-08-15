import TourCard from "./TourCard";
import styles from "./TourContainer.module.scss";

function TourContainer({ data }) {
  return (
    <section className={styles.container}>
      {data.map((el, i) => (
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
  );
}

export default TourContainer;
