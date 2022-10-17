import React from "react";
import AccordionList from "../components/Other/AccordionList";
import {MinusIcon} from "../components/Pictures/Icons";

function Accordion() {
  return (
	  <section className="accordion">
		<AccordionList iconName={<MinusIcon/>}/>
	  </section>
  )
}

export default Accordion;
