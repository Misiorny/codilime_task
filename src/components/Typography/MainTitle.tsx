import React from "react";
import ColoredText from "./ColoredText";

interface MainTitle {
  titleText: string
  coloredText: string
}

function MainTitle({titleText, coloredText}: MainTitle) {
  return (
	  <h1 className="mainTitle">
		<ColoredText colorText={coloredText}/>{titleText}
	  </h1>
  )
}

export default MainTitle;
