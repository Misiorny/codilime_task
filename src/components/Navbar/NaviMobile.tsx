import React from "react";
import {NavList} from "./index";
import Icon from "../Pictures";

function NaviMobile() {
  return (
	  <nav className="navigation-mobile">
		<Icon iconName="quoteupIcon" altText="Burger Icon"/>
		<NavList/>
	  </nav>
  )
}

export default NaviMobile;
