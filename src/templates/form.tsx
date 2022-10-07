import React from "react";
import {SubTitle} from "../components/Typography";
import Button, {Input, Label} from "../components/Forms";

function Form() {
  return (
	  <form className="subscription">
		<SubTitle subtitleText="Massa tempor nec feugiat nisl pretium fusce"/>
		<Input id="email" name="email" type="email"/><Button btnText="Subscribe"/>
		<Label htmlFor="email" labelText="Chupa chups gummi bears shortbread candy "/>
	  </form>
  )
}

export default Form;
