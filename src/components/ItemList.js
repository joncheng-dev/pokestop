import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      <h2>Item List</h2>
      <hr />
      {props.itemList.map((item) => (
        <Item
          whenItemSelected={props.onItemSelection}
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          id={item.id}
          key={item.id}
        />
      ))}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func,
};

export default ItemList;
