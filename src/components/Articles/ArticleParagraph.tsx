import React from "react";

interface ArticleParagraph {
  articleText: string;
}

function ArticleParagraph({articleText}: ArticleParagraph) {
  return (
	  <p className="articleParagraph">{articleText}</p>
  )
}

export default ArticleParagraph
