import React from "react";

function ItemDetail(props) {
  const { item, onDeleteClick } = props;
  return (
    <React.Fragment>
      <h2>Item Detail</h2>
      <hr />
      <h3>{item.name}</h3>
      <p>
        <em>{item.description}</em>
      </p>
      <p>{item.quantity}</p>
      <button onClick={props.onEditClick}>Edit Item Details</button>
      <button onClick={() => onDeleteClick(item.id)}>Delete Item</button>
      <hr />
    </React.Fragment>
  );
}

export default ItemDetail;
