import React from "react";
import {NavList} from "./index";
import Button from "../Forms";
import Icon from "../Pictures";

function NaviDesktop() {
  return (
	  <nav className="navigation-desktop">
		<NavList/>
		<Button btnText="Contact Us"><Icon iconName="rightarrowIcon" altText="Right Arrow"/></Button>
	  </nav>
  )
}

export default NaviDesktop;
