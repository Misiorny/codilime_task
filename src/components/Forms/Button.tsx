import React from "react";

interface Button {
  btnText: string,
  iconName: JSX.Element,
}

function Button({btnText, iconName}: Button) {
  return (
	  <button className="btn" type="button">
		<p className="btn__text">{btnText}{iconName}</p>
	  </button>
  )
}

export default Button;
