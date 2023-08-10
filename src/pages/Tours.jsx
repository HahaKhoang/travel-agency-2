import TourContainer from "../ui/TourContainer";
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

const food = [
  {
    name: "Matcha Mania",
    amount: "5",
    location: "Kyoto, Japan",
    img: matchaDrink,
  },
  // { name: "Seafood ", amount: "3", location: "Tokyo, Japan", img: sushi },
  // { name: "Dessert ", amount: "7", location: "Kyoto, Japan", img: wagashi },
  // { name: "Cute food", amount: "6", location: "Osaka, Japan", img: dango },
  // { name: "Ramen", amount: "5", location: "Fukuoka, Japan", img: ramen },
];

const adventure = [
  {
    name: "Underwater",
    amount: "5",
    location: "Palawan, Philippines",
    img: scubadiving,
  },
  {
    name: "Rock Climbing",
    amount: "3",
    location: "Utah, America",
    img: rockclimbing,
  },
  {
    name: "Adrenaline Junkie",
    amount: "4",
    location: "Queenstown, New Zealand",
    img: bungeejumping,
  },
  {
    name: "Theme Park Lover",
    amount: "3",
    location: "Japan",
    img: rollercoaster,
  },
  {
    name: "Sky Diving",
    amount: "3",
    location: "Cape Town, South Africa",
    img: skydiving,
  },
];

const nature = [
  {
    name: "Lakes",
    amount: "3",
    location: "Helsinki, Finland",
    img: lake,
  },
  {
    name: "Tropical",
    amount: "4",
    location: "Aruba",
    img: tropical,
  },
  {
    name: "Mountains",
    amount: "4",
    location: "Patagonia",
    img: mountain,
  },
  {
    name: "Volcanos",
    amount: "3",
    location: "Iceland",
    img: volcano,
  },
];

const culture = [
  {
    name: "Classical Art",
    amount: "3",
    location: "Paris, France",
    img: classicArt,
  },
  {
    name: "Architecture",
    amount: "5",
    location: "Vienna, Austria",
    img: architecture,
  },
  {
    name: "Street Art",
    amount: "8",
    location: "Berlin, Germany",
    img: streetArt,
  },
  {
    name: "Castles",
    amount: "6",
    location: "Berlin, Germany",
    img: castle,
  },
];

function Tours() {
  return (
    <div>
      <TourContainer data={food} header="For foodies" />
      {/* <TourContainer data={adventure} header="For adventure seekers" />
      <TourContainer data={nature} header="Nature lovers" />
      <TourContainer data={culture} header="Cultural connoseuir" /> */}
    </div>
  );
}

export default Tours;
