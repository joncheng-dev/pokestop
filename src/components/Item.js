import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenItemSelected(props.id)}>
        <h3>{props.name}</h3>
        <p>
          <em>{props.description}</em>
        </p>
        <p>{props.quantity}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  whenItemSelected: PropTypes.func,
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
};

export default Item;
