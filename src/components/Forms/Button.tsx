import React from "react";

interface Button {
  btnText: string,
  iconName: JSX.Element,
}

function Button({btnText, iconName}: Button) {
  return (
	  <button className="btn" type="button">
		<p className="btn__text">{btnText}</p>
		{iconName}
	  </button>
  )
}

export default Button;
