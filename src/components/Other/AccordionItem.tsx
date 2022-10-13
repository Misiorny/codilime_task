import React from "react";
import {OtherTitle, ArticleParagraph} from "../Typography";

interface AccordionItem {
  otherTitleText: string;
  articleText: string;
}

function AccordionItem({otherTitleText, articleText}: AccordionItem) {
  return (
	  <li className="accordion__item">
		<OtherTitle otherTitleText={otherTitleText}/>
		<ArticleParagraph articleText={articleText}/>
	  </li>
  )
}

export default AccordionItem;
