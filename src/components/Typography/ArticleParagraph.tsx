import React from "react";

interface ArticleParagraph {
  articleText: string;
}

function ArticleParagraph({articleText}: ArticleParagraph) {
  return (
	  <div className="article">
		<p className="article__paragraph">{articleText}</p>
	  </div>
  )
}

export default ArticleParagraph
