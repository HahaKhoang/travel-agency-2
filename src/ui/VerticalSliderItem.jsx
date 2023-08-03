import styles from "./VerticalSliderItem.module.scss";

function VerticalSliderItem({ name, tour, color }) {
  return (
    <div style={{ backgroundColor: color }}>
      <h1>{name}</h1>
      <p>{tour}</p>
    </div>
  );
}

export default VerticalSliderItem;
