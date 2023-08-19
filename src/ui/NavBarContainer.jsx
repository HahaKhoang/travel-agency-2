import { useState } from "react";
import SideNavBar from "./SideNavBar";
import NavBar from "./NavBar";

function NavBarContainer() {
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY > 1) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div style={{ transition: "all 3s" }}>
      {colorChange ? <SideNavBar /> : <NavBar />}
    </div>
  );
}

export default NavBarContainer;
