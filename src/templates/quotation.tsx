import React from "react";
import {SubTitle, Quote, ShortQuote} from "../components/Typography";
import {
  InvisionIcon, QuoteDownIcon,
  QuoteUpIcon
} from "../components/Pictures/Icons";

function Quotation() {
  return (
	  <blockquote className="quotation">
		<SubTitle subtitleText="Bibendum at varius vel pharetra vel turpis nunc eget lorem."/>
		<div className="quotation__content">
		  <QuoteUpIcon/>
		  <section className="quotation__text">
			<Quote quoteText="Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Tortor vitae purus faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi ipsum faucibus. Tristique risus nec feugiat in fermentum. Elit duis tristique sollicitudin nibh sit amet commodo nulla."/>
			<QuoteDownIcon/>
		  </section>
		  <ShortQuote shortQuoteSentence="Faucibus Vitae, Office Assistant "/>
		  <InvisionIcon/>
		</div>
	  </blockquote>
  )
}

export default Quotation;
