import React from "react";
import {ExternalLink} from "../Navigation";

interface Card {
  iconName: JSX.Element,
  labelText: string,
  href: string
}

function Card({iconName, labelText, href}: Card) {
  return (
	  <div className="card">
		{iconName}
		<ExternalLink labelText={labelText} href={href}/>
	  </div>
  )
}

export default Card;
