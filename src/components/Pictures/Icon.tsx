import React from "react";

interface Icon {
  iconPath: string;
  altText: string;
}

function Icon({iconPath, altText}: Icon) {
  return (
	  <img className="icon" src={iconPath} alt={altText}/>
  )
}

export default Icon;
