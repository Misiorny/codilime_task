import React from "react";
import womanBig from '../../images/png/woman_big.png'
import womanSmall from '../../images/png/woman_small.png'

interface Picture {
  pictureNameSource: string
  pictureNameImg: string
}

function Picture({pictureNameSource, pictureNameImg}: Picture) {
  return (
	  <picture>
		<source srcSet={womanSmall} media="(max-width: 1200px)"/>
		<img src={womanBig} alt="Women with laptop"/>
	  </picture>
  )
}

export default Picture;
