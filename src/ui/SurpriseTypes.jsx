import styles from "./SurpriseTypes.module.scss";
import SurpriseTypeCards from "./SurpriseTypeCards";
import plane from "../../public/img/undraw/plane.svg";
import roadTrip from "../../public/img/undraw/roadTrip.svg";
import weekend from "../../public/img/undraw/weekend.svg";
import day from "../../public/img/undraw/day.svg";

const tours = [
  {
    icon: plane,
    title: "Plane trips",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus fugiat. Perferendis laudantium doloribus cupiditate! Ducimus, aut adipisci? Perferendis quasi labore eos minus iste nesciunt modi!",
    budget: "1000",
  },
  {
    icon: roadTrip,
    title: "Road trips",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus  ex fuga fugiat. Perferendis laudantium doloribus cupiditate! Ducimus, aut adipisci? Perferendis quasi labore eos minus iste nesciunt modi!",
    budget: "600",
  },
  {
    icon: weekend,
    title: "Weekend getaways",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus amet doloribus ex fuga fugiat. Perferendis laudantium doloribus cupiditate! Ducimus, aut adipisci? Perferendis quasi labore eos minus iste nesciunt modi!",
    budget: "900",
  },
  {
    icon: day,
    title: "Day trips",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus amet doloribus ex fuga fugiat. Perferendis laudantium doloribus cupiditate! Ducimus, aut adipisci? ",
    budget: "200",
  },
];

function SurpriseTypes() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Types of trips</h1>
      <div className={styles["types-container"]}>
        {tours.map((el, i) => {
          return (
            <SurpriseTypeCards
              icon={el.icon}
              title={el.title}
              description={el.description}
              budget={el.budget}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SurpriseTypes;
