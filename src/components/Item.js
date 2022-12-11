import React from "react";

function Item(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenItemSelected(props.id)}>
        <h3>{props.name}</h3>
        <p>
          <em>{props.description}</em>
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

export default Item;
