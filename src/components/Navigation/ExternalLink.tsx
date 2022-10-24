import React from "react"

interface ExternalLink {
  href: string,
  target: string,
  rel: string,
  labelText: string
}

function ExternalLink({href, target, rel, labelText}: ExternalLink) {
  return (
	  <p className="externalLink__text">
		<a className="externalLink__link" href={href} target={target} rel={rel}>{labelText}</a>
		<strong className="arrowSignRight">   &#8250;</strong>
	  </p>
  )
}

ExternalLink.defaultProps = {
  target: "_blank",
  rel: "noopener noreferrer",
}
export default ExternalLink;
