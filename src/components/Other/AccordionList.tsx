import React from "react";
import AccordionItem from "./AccordionItem";

interface AccordionList {
  iconName: JSX.Element
}

function AccordionList({iconName}: AccordionList) {
  return (
	  <ol className="orderedList">
		<AccordionItem otherTitleText="Arcu non odio" articleText="Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium."/>{iconName}
		<AccordionItem otherTitleText="Eget gravida cum sociis" articleText=""/>{iconName}
		<AccordionItem otherTitleText="Massa massa ultricies" articleText=""/> {iconName}
	  </ol>
  )
}

export default AccordionList;
