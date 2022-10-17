import React from "react";
import {ArticleParagraph} from "../components/Typography";
import {InternalLink} from "../components/Navigation";

function Footer() {
  return (
	  <footer className="footer">
		<div className="footer__lists">
		</div>
		<footer className="footer__footer">
		  <ArticleParagraph articleText="© 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved."/>
		  <ArticleParagraph articleText="Legal"/>
		  <InternalLink navText="Privacy policy" to="/overview"/>
		  <ArticleParagraph articleText="Proud to be Open Source"/>
		</footer>
	  </footer>
  )
}

export default Footer;
