import React from "react";
import Item from "./Item";

function ItemList(props) {
  return (
    <React.Fragment>
      <h2>Item List</h2>
      <hr />
      {props.itemList.map((item) => (
        <Item name={item.name} description={item.description} id={item.id} key={item.id} />
      ))}
    </React.Fragment>
  );
}

export default ItemList;
