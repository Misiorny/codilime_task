import React from "react";
import logoIcon from '../../../images/svg/logo.svg';

function LogoIcon() {
  return (
	  <div className="icon">
		<img className="icon__img" src={logoIcon} alt="Logo Icon"/>
	  </div>
  )
}

export default LogoIcon;
