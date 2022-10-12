import React from "react";

interface Card {
  iconName: JSX.Element;
}

function Card({iconName}: Card) {
  return (
	  <div className="card">
		{iconName}
	  </div>
  )
}

export default Card;
