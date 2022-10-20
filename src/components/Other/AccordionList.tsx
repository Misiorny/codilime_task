import React from "react";
import AccordionItem from "./AccordionItem";
import dataAccordionList from "../../utilities/dataAccordionList";

function AccordionList() {
  return (
	  <ol className="orderedList">
		{dataAccordionList.map((e) => <AccordionItem
				key={e.id} otherTitleText={e.title} articleText={e.text} icon={
			  <e.icon/>}
			/>
		)}
	  </ol>
  )
}

export default AccordionList;
