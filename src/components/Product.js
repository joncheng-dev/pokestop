import React from "react";

function Product(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>
        <em>{props.description}</em>
      </p>
      <hr />
    </React.Fragment>
  );
}

export default Product;
