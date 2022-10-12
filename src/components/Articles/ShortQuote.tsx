import React from "react";

interface ShortQuote {
  shortQuoteSentence: string;
}

function ShortQuote({shortQuoteSentence}: ShortQuote) {
  return (
	  <q className="quote">{shortQuoteSentence}</q>
  )
}

export default ShortQuote;
