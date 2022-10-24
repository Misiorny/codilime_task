import React from "react";
import {SubTitle} from "../components/Typography";
import Button, {Input, Label} from "../components/Forms";
import {Empty} from "../components/Pictures/Icons";

function Form() {
  return (
	  <form className="subscription">
		<SubTitle subtitleText="Subscribe to our newsletter"/>
		<Input id="email" name="email" type="email"/>
		<Button iconName={<Empty/>} btnText="Subscribe"/>
		<Label htmlFor="email" labelText="Chupa chups gummi bears shortbread candy "/>
	  </form>
  )
}

export default Form;
