import React from "react";
import {NaviDesktop, NaviMobile} from "../components/Navbar";
import {LogoIcon} from "../components/Pictures/Icons";

function Header() {
  return (
	  <header className="header">
		<NaviMobile iconName={<LogoIcon/>}/>
		<NaviDesktop/>
	  </header>
  )
}

export default Header;
