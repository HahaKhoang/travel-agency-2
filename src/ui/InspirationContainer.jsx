import InspirationCard from "./InspirationCard";
import styles from "./InspirationContainer.module.scss";

function InspirationContainer({ data }) {
  return (
    <>
      <div className={styles.container}>
        {data.map((el) => (
          <InspirationCard
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

export default InspirationContainer;
