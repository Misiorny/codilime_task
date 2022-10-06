import React from "react";

interface ShortQuote {
  shortQuoteSentence: string;
}

function ShortQuote({shortQuoteSentence}: ShortQuote) {
  return (
	  <q className="shortQuote">{shortQuoteSentence}</q>
  )
}

export default ShortQuote;
