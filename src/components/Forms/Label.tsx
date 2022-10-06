import React from "react";

interface Label {
  labelText: string;
}

function Label({labelText}: Label) {
  return (
	  <label className="label">{labelText}</label>
  )
}

export default Label;
