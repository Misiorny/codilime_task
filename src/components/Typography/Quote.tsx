import React from "react";

interface Quote {
  quoteText: string;
}

function Quote({quoteText}: Quote) {
  return (
	  <blockquote className="quote">
		<p className="quote__content">{quoteText}</p>
	  </blockquote>
  )
}

export default Quote;
