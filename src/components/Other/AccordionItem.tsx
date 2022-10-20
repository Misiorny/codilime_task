import React from "react";
import {OtherTitle, ArticleParagraph} from "../Typography";

interface AccordionItem {
  otherTitleText: string;
  articleText: string;
  icon: React.ReactNode
}

function AccordionItem({
						 otherTitleText,
						 articleText,
						 icon,
					   }: AccordionItem) {
  return (
	  <li className="accordion__item">
		<OtherTitle otherTitleText={otherTitleText}/>
		{icon}
		<ArticleParagraph articleText={articleText}/>
	  </li>
  )
}

export default AccordionItem;
