import React from "react";
import {NaviDesktop, NaviMobile} from "../components/Navigation";
import {CodiLimeIcon} from "../components/Pictures/Icons";

function Header() {
  return (
	  <header className="header">
		<NaviMobile iconName={<CodiLimeIcon/>}/>
		<NaviDesktop/>
	  </header>
  )
}

export default Header;
