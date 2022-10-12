import React from "react";
import {MainTitle} from "../components/Typography";
import Button from "../components/Forms";
import ArticleParagraph from "../components/Articles";
import Picture from "../components/Pictures";
import {RightArrowIcon} from "../components/Pictures/Icons";

function Slider() {
  return (
	  <section className="slider">
		<article className="slider__article">
		  <MainTitle coloredText="Duis aute irure" titleText=" dolor in reprehenderit"/>
		  <ArticleParagraph articleText="Nam at lectus urna duis convallis. Id semper risus in hendrerit gravida rutrum quisque non tellus. Elit eget gravida cum sociis natoque. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Arcu felis bibendum ut tristique et egestas. "/>
		  <Button
			  btnText="Discover now" iconName={<RightArrowIcon/>}
		  />
		</article>
		<Picture pictureNameImg="womanBig" pictureNameSource="womanSmall"/>
	  </section>
  )
}

export default Slider;
