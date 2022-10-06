import React from "react";

interface ArticleParagraph {
  text: string;
}

function ArticleParagraph({text}: ArticleParagraph) {
  return (
	  <p className="articleParagraph">{text}</p>
  )
}

export default ArticleParagraph
