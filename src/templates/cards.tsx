import React from "react";
import {Card} from "../components/Other";
import AndroidIcon, {
  CheckCircleIcon,
  CircleIcon, ScissorsIcon
} from "../components/Pictures/Icons";
import {
  ArticleParagraph,
  ArticleTitle,
  ImportantText
} from "../components/Typography";

function Cards() {
  return (
	  <section className="cards">
	  <section className="cards__content">
		<ArticleTitle artTitleText="Massa tempor nec feugiat nisl pretium fusce"/>
		<ArticleParagraph
			articleText={[
			  "Pellentesque",
			  <ImportantText importantText=" habitant "/>
			  , "morbi tristique senectus et netus et malesuada.",
			  <ImportantText importantText=" Ipsum faucibus vitae "/>,
			  "aliquet nec ullamcorper sit amet risus nullam.Dictum varius duis at consectetur",
			  <mark> lorem donec </mark>,
			  "massa sapien.Massa tempor nec feugiat nisl pretium fusce."
			]}
		/>
	  </section>
	  <section className="cards__items">
		<Card
			iconName={
			  <CheckCircleIcon/>} labelText="View details" href="https://codilime.com/services/golang-development/"
		/>
		<Card
			iconName={
			  <CircleIcon/>} labelText="View details" href="https://codilime.com/services/c-and-cpp-development/"
		/>
		<Card
			iconName={
			  <AndroidIcon/>} labelText="View details" href="https://www.android.com/"
		/>
		<Card
			iconName={
			  <ScissorsIcon/>} labelText="View details" href="https://codilime.com/services/rust-development/"
		/>
	  </section>
	  </section>
  )
}

export default Cards;
