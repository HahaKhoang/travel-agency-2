import tour from "../../public/img/tour.jpg";
import matchaDrink from "../../public/img/matchaDrink.jpg";
import sushi from "../../public/img/sushi.jpg";
import dango from "../../public/img/dango.jpg";
import ramen from "../../public/img/ramen.jpg";
import wagashi from "../../public/img/wagashi.jpg";
import rollercoaster from "../../public/img/rollercoaster.jpg";
import bungeejumping from "../../public/img/bungeejumping.jpg";
import rockclimbing from "../../public/img/rockclimbing.jpg";
import scubadiving from "../../public/img/scubadiving.jpg";
import skydiving from "../../public/img/skydiving.jpg";
import tropical from "../../public/img/tropical.jpg";
import mountain from "../../public/img/mountain.jpg";
import lake from "../../public/img/lake.jpg";
import volcano from "../../public/img/volcano.jpg";
import streetArt from "../../public/img/streetArt.jpg";
import classicArt from "../../public/img/classicArt.jpg";
import castle from "../../public/img/castle.jpg";
import architecture from "../../public/img/architecture.jpg";
import Banner from "../ui/Banner";
import { Outlet } from "react-router-dom";
import TourContainer from "../ui/TourContainer";

const tours = [
  {
    title: "All in one Japan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad illum nulla repudiandae accusamus odit consequuntur consectetur hic quas et delectus, vitae esse nesciunt dolorem quod id facilis nostrum debitis!",
    duration: "10",
    type: "All around",
    img: matchaDrink,
  },
  {
    title: "Sample Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad illum nulla repudiandae accusamus odit consequuntur consectetur hic quas et delectus, vitae esse nesciunt dolorem quod id facilis nostrum debitis!",
    duration: "1",
    type: "Food",
    img: sushi,
  },
  {
    title: "All in one Japan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad illum nulla repudiandae accusamus odit consequuntur consectetur hic quas et delectus, vitae esse nesciunt dolorem quod id facilis nostrum debitis!",
    duration: "10",
    type: "Nature",
    img: dango,
  },
  {
    title: "All in one Japan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad illum nulla repudiandae accusamus odit consequuntur consectetur hic quas et delectus, vitae esse nesciunt dolorem quod id facilis nostrum debitis!",
    duration: "10",
    type: "Adventure",
    img: wagashi,
  },
  {
    title: "All in one Japan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad illum nulla repudiandae accusamus odit consequuntur consectetur hic quas et delectus, vitae esse nesciunt dolorem quod id facilis nostrum debitis!",
    duration: "10",
    type: "Food",
    img: ramen,
  },
  {
    title: "All in one Japan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad illum nulla repudiandae accusamus odit consequuntur consectetur hic quas et delectus, vitae esse nesciunt dolorem quod id facilis nostrum debitis!",
    duration: "10",
    type: "Nightlife",
    img: rollercoaster,
  },
  {
    title: "All in one Japan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad illum nulla repudiandae accusamus odit consequuntur consectetur hic quas et delectus, vitae esse nesciunt dolorem quod id facilis nostrum debitis!",
    duration: "10",
    type: "Culture",
    img: bungeejumping,
  },
  {
    title: "All in one Japan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad illum nulla repudiandae accusamus odit consequuntur consectetur hic quas et delectus, vitae esse nesciunt dolorem quod id facilis nostrum debitis!",
    duration: "10",
    type: "Culture",
    img: rockclimbing,
  },
  {
    title: "All in one Japan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad illum nulla repudiandae accusamus odit consequuntur consectetur hic quas et delectus, vitae esse nesciunt dolorem quod id facilis nostrum debitis!",
    duration: "10",
    type: "All around",
    img: scubadiving,
  },
  {
    title: "All in one Japan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad illum nulla repudiandae accusamus odit consequuntur consectetur hic quas et delectus, vitae esse nesciunt dolorem quod id facilis nostrum debitis!",
    duration: "10",
    type: "Food",
    img: skydiving,
  },
  {
    title: "All in one Japan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad illum nulla repudiandae accusamus odit consequuntur consectetur hic quas et delectus, vitae esse nesciunt dolorem quod id facilis nostrum debitis!",
    duration: "10",
    type: "Nature",
    img: tropical,
  },
  {
    title: "All in one Japan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad illum nulla repudiandae accusamus odit consequuntur consectetur hic quas et delectus, vitae esse nesciunt dolorem quod id facilis nostrum debitis!",
    duration: "10",
    type: "Nature",
    img: mountain,
  },
];

function Tours() {
  return (
    <div>
      <Banner img={tour} text="Find the perfect tour for you" />
      <TourContainer data={tours} />
    </div>
  );
}

export default Tours;
