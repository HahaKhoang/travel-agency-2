import TourHeader from "./TourHeader";
import TourCard from "./TourCard";
import Slider from "react-slick";
import styles from "./TourContainer.module.scss";

function TourContainer({ data, header }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    accessibility: true,
  };
  return (
    <>
      <TourHeader text={header} />
      <div className={styles.container}>
        <Slider {...settings}>
          {data.map((el) => (
            <TourCard
              name={el.name}
              amount={el.amount}
              location={el.location}
              img={el.img}
              key={el.name}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default TourContainer;
