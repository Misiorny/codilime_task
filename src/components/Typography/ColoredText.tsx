import React from "react";

interface ColoredText {
  colorText: string
}

function ColoredText({colorText}: ColoredText) {
  return (
	  <span className="coloredText">{colorText}</span>
  )
}

export default ColoredText;
