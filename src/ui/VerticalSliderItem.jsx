import styles from "./VerticalSliderItem.module.scss";

function VerticalSliderItem({
  name,
  tour,
  color,
  clicked,
  index,
  activeCustomer,
}) {
  const click = clicked ? `translateY(${100 * (index - activeCustomer)}%)` : "";

  return (
    <div style={{ backgroundColor: color, transform: `${click}` }}>
      <h1>{name}</h1>
      <p>{tour}</p>
    </div>
  );
}

export default VerticalSliderItem;
