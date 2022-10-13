import React from "react";
import {NavList} from "./index";
import Button from "../Forms";
import RightArrowIcon from "../Pictures/Icons/RightArrowIcon";

function NaviDesktop() {
  return (
	  <nav className="navigation-desktop">
		<NavList/>
		<Button btnText="Contact Us" iconName={<RightArrowIcon/>}/>
	  </nav>
  )
}

export default NaviDesktop;
