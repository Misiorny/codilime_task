import React from "react";
import {Card} from "../components/Other";
import AndroidIcon, {
  CheckCircleIcon,
  CircleIcon, ScissorsIcon
} from "../components/Pictures/Icons";

function Cards() {
  return (
	  <section className="cards">
		<Card iconName={<CheckCircleIcon/>}/>
		<Card iconName={<CircleIcon/>}/>
		<Card iconName={<AndroidIcon/>}/>
		<Card iconName={<ScissorsIcon/>}/>
	  </section>
  )
}

export default Cards;
