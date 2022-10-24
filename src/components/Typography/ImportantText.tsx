import React from "react";

interface ImportantText {
  importantText: string
}

function ImportantText({importantText}: ImportantText) {
  return (
	  <strong>{importantText}</strong>
  )
}

export default ImportantText;
