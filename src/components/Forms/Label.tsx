import React from "react";

interface Label {
  labelText: string;
  htmlFor: string;
}

function Label({labelText, htmlFor}: Label) {
  return (
	  <label className="label" htmlFor={htmlFor}>{labelText}</label>
  )
}

export default Label;
