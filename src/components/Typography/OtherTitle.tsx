import React from "react";

interface OtherTitle {
  otherTitleText: string
}

function OtherTitle({otherTitleText}: OtherTitle) {
  return (
	  <h4 className="otherTitle">{otherTitleText}</h4>
  )
}

export default OtherTitle;
