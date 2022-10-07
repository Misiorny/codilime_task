import React from "react";

interface Button {
  btnText: string,
}

function Button({btnText}: Button,) {
  return (
	  <button className="btn">
		<p className="btn__text">{btnText}</p>
	  </button>
  )
}

export default Button;
