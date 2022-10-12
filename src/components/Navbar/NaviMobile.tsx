import React from "react";
import {NavList} from "./index";

interface NaviMobile {
  iconName: JSX.Element,
}

function NaviMobile({iconName}: NaviMobile) {
  return (
	  <nav className="navigation-mobile">
		{iconName}
		<NavList/>
	  </nav>
  )
}

export default NaviMobile;
