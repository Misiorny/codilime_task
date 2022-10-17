import React from "react";
import {ArticleParagraph} from "../components/Typography";
import {Link} from "gatsby";

function Footer() {
  return (
	  <footer className="footer__mobile">
		<div className="footer__lists">
		</div>
		<footer className="footer__footer">
		  <ArticleParagraph articleText="© 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved."/>
		  <ArticleParagraph articleText="Legal"/>
		  <Link to="/overview">Privacy policy</Link>
		  <ArticleParagraph articleText="Proud to be Open Source"/>
		</footer>
	  </footer>
  )
}

export default Footer;
