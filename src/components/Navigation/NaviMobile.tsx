import React from "react";
import {NavList} from "./index";
import ColoredText from "../Typography";

interface NaviMobile {
  iconName: JSX.Element,
}

function NaviMobile({iconName}: NaviMobile) {
  return (
	  <nav className="navigation-mobile">
		<div className="burger">
		  {iconName}
		  <ColoredText colorText="MENU"/>
		</div>
		<NavList/>
	  </nav>
  )
}

export default NaviMobile;
