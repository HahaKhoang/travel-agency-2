import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kyoto from "../../public/img/kyoto.jpg";
import fuji from "../../public/img/fuji.jpg";
import arashiyama from "../../public/img/arashiyama.jpg";
import CarouselItem from "./CarouselItem";

const data = [
  { name: "Hanbin", tour: "Explore Kyoto", color: "#e4dddd" },
  { name: "Dongwoon", tour: "Explore Fuji", color: "#bdbcbc" },
  { name: "Keanu", tour: "Explore Tokyo", color: "#7a7878" },
];

const images = [{ image: arashiyama }, { image: fuji }, { image: kyoto }];

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
  };
  return (
    <div>
      <Slider {...settings}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Slider>
    </div>
  );
}

export default Carousel;
