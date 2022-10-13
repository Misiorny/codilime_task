import React from "react";
import AccordionItem from "./AccordionItem";

function AccordionList() {
  return (
	  <ol className="orderedList">
		<AccordionItem otherTitleText="Arcu non odio" articleText="Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium."/>
		<AccordionItem otherTitleText="Eget gravida cum sociis" articleText=""/>
		<AccordionItem otherTitleText="Massa massa ultricies" articleText=""/>
	  </ol>
  )
}

export default AccordionList;
