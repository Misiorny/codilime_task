import React from "react";

interface Input {
  type: string;
  id: string;
  name: string;
}

function Input({type, name, id}: Input) {
  return (
	  < input className="input" type={type} name={name} id={id}/>
  )
}

export default Input;
