import TourHeader from "./TourHeader";
import TourCard from "./TourCard";
import styles from "./TourContainer.module.scss";

function TourContainer({ data, header }) {
  return (
    <>
      <TourHeader text={header} />
      <div className={styles.container}>
        {data.map((el) => (
          <TourCard
            name={el.name}
            amount={el.amount}
            location={el.location}
            img={el.img}
            key={el.name}
          />
        ))}
      </div>
    </>
  );
}

export default TourContainer;
