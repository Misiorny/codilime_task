import React from "react";
import androidIcon from '../../images/svg/android.svg';
import checkcircleIcon from '../../images/svg/checkcircle.svg';
import circleIcon from '../../images/svg/circle.svg';
import codilimeIcon from '../../images/svg/codilime.svg';
import fbIcon from '../../images/svg/fb.svg';
import githubIcon from '../../images/svg/github.svg';
import instagramIcon from '../../images/svg/instagram.svg';
import logoIcon from '../../images/svg/logo.svg';
import logoInvisionIcon from '../../images/svg/logo_invision.svg';
import mIcon from '../../images/svg/m.svg';
import minusIcon from '../../images/svg/minus.svg';
import plusIcon from '../../images/svg/plus.svg';
import quotedownIcon from '../../images/svg/quotedown.svg';
import quoteupIcon from '../../images/svg/quoteup.svg';
import rightarrowIcon from '../../images/svg/rightarrow.svg';
import scisorsIcon from '../../images/svg/scisors.svg';
import tweeterIcon from '../../images/svg/tweeter.svg';

interface IconProps {
  iconName: string;
  altText: string;
}

function Icon({iconName, altText}: IconProps) {
  return (
	  <img className="icon" src={iconName} alt={altText}/>
  )
}

export default Icon;
