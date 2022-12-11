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
      <hr />
    </React.Fragment>
  );
}

export default ItemDetail;
