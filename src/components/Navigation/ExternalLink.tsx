import React from "react"

interface ExternalLink {
  href: string,
  target: string,
  rel: string,
  labelText: string
}

function ExternalLink({href, target, rel, labelText}: ExternalLink) {
  return (
	  <a href={href} target={target} rel={rel}>{labelText}</a>
  )
}

ExternalLink.defaultProps = {
  target: "_blank",
  rel: "noopener noreferrer",
}
export default ExternalLink;
