import React from "react";
import {Link} from "gatsby";

interface InternalLink {
  to: string;
  navText: string
}

function InternalLink({to, navText}: InternalLink) {
  return (
	  <Link className="internalLink" to={to}>{navText}</Link>
  )
}

export default InternalLink;
