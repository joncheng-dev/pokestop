import React from "react";
import PropTypes from "prop-types";

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

ItemDetail.propTypes = {
  item: PropTypes.object,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

export default ItemDetail;
