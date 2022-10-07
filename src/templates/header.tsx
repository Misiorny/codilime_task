import React from "react";
import {NaviDesktop, NaviMobile} from "../components/Navbar";

function Header() {
  return (
	  <header className="header">
		<NaviMobile/>
		<NaviDesktop/>
	  </header>
  )
}

export default Header;
