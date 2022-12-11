import React from "react";

function ItemDetail(props) {
  const { item } = props;
  return (
    <React.Fragment>
      <h2>Item Detail</h2>
      <hr />
      <h3>{item.name}</h3>
      <p>
        <em>{item.description}</em>
      </p>
      <button onClick={props.onDeleteClick}>Delete Item</button>
      <hr />
    </React.Fragment>
  );
}

export default ItemDetail;
