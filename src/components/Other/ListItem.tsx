import React from "react";

interface ListItem {
  listText: string
}

function ListItem({listText}: ListItem) {
  return (
	  <li className="listItem">{listText}</li>
  )
}

export default ListItem;
