import React from "react";
import type {HeadFC} from "gatsby"
import Header from "../templates/header";
import Slider from "../templates/slider";
import Accordion from "../templates/accordion";
import Quotation from "../templates/quotation";
import Cards from "../templates/cards";
import Form from "../templates/form";
import Footer from "../templates/footer";

function IndexPage() {
  return (
	  <main className="main wrapper">
		<Header/>
		<Slider/>
		<Accordion/>
		<Quotation/>
		<Cards/>
		<Form/>
		<Footer/>
	  </main>
  )
}

export default IndexPage;
export const Head: HeadFC = () => <title>CodiLime Task</title>
