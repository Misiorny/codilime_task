import React from "react";
import tweeterIcon from '../../../images/svg/tweeter.svg';

function TweeterIcon() {
  return (
	  <div className="icon">
		<img className="icon__img" src={tweeterIcon} alt="Tweeter Icon"/>
	  </div>
  )
}

export default TweeterIcon;
