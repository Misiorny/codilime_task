import React from "react";
import dataNavLinks from "../../utilities/dataNavLinks";
import NavItem from "./NavItem";

function NavList() {
  return (
	  <menu className="navitems">
		{dataNavLinks.map((e) =>
			<NavItem key={e.id} to={e.to} navText={e.label}/>)}
	  </menu>
  )
}

export default NavList;
