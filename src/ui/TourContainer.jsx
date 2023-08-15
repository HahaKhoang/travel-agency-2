import TourCard from "./TourCard";
import styles from "./TourContainer.module.scss";

function TourContainer({ data }) {
  return (
    <section className={styles.container}>
      {data.map((el, i) => (
        <TourCard
          key={i}
          title={el.title}
          img={el.img}
          description={el.description}
          duration={el.duration}
          type={el.type}
        />
      ))}
    </section>
  );
}

export default TourContainer;
