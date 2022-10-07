import React from "react";
import {SubTitle} from "../components/Typography";
import {Quote, ShortQuote} from "../components/Articles";
import Icon from "../components/Pictures";

function Quotation() {
  return (
	  <blockquote className="quotation">
		<SubTitle subtitleText="Bibendum at varius vel pharetra vel turpis nunc eget lorem."/>
		<section>
		  <Quote quoteText="Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Tortor vitae purus faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi ipsum faucibus. Tristique risus nec feugiat in fermentum. Elit duis tristique sollicitudin nibh sit amet commodo nulla."/>
		  <ShortQuote shortQuoteSentence="Faucibus Vitae, Office Assistant "/>
		  <Icon iconPath=".src/images/svg/logo_invision.svg" altText="invision logo"/>
		</section>
	  </blockquote>
  )
}

export default Quotation;
