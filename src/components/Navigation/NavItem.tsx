import React from "react";
import {Link} from "gatsby";

interface NavItem {
  to: string;
  navText: string
}

function NavItem({to, navText}: NavItem) {
  return (
	  <li className="navitem">
		<Link className="navitem__link" to={to}>{navText}</Link>
	  </li>
  )
}

export default NavItem;
