import React from "react";

interface ListItem {
  listItemText: string,
}

function ListItem({listItemText}: ListItem) {
  return (
	  <li className="listItem">{listItemText}</li>
  )
}

export default ListItem;
