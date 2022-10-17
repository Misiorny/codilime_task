import React from "react";

interface ArticleTitle {
  artTitleText: string
}

function ArticleTitle({artTitleText}: ArticleTitle) {
  return (
	  <h2 className="articleTitle">{artTitleText}</h2>
  )
}

export default ArticleTitle;
