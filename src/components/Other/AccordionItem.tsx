import React from "react";
import {OtherTitle} from "../Typography";
import ArticleParagraph from "../Articles";

function AccordionItem() {
  return (
	  <li className="accordion__item">
		<OtherTitle otherTitleText="Arcu non odio"/>
		<ArticleParagraph text="Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium."/>
	  </li>
  )
}

export default AccordionItem;
