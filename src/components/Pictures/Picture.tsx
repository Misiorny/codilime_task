import React from "react";

function Picture() {
  return (
	  <picture>
		<source srcSet="src/images/png/woman_small.png" media="(min-width: 414px)"/>
		<img src="src/images/png/woman_big.png" alt="Women with laptop"/>
	  </picture>
  )
}

export default Picture;
