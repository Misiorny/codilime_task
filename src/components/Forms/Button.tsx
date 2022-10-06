import React from "react";
import Icon from "../Pictures/Icon";

interface Button {
  btnText: string
  // btnIcon: object
}

function Button({btnText}: Button) {
  return (
	  <button className="btn">{btnText}
		<Icon iconPath="./src/images/icon.png" altText="Arrow Right"/>
	  </button>
  )
}

export default Button;
