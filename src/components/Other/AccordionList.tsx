import React from "react";
import AccordionItem from "./AccordionItem";

function AccordionList() {
  return (
	  <ol className="orderedList">
		<AccordionItem/>
		<AccordionItem/>
		<AccordionItem/>
	  </ol>
  )
}

export default AccordionList;
