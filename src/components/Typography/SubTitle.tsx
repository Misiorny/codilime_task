import React from "react";

interface SubTitle {
  subtitleText: string
}

function SubTitle({subtitleText}: SubTitle) {
  return (
	  <h3 className="subTitle">{subtitleText}</h3>
  )
}

export default SubTitle;
