import React from "react";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.onFormSubmission}>
        <p>Item Name</p>
        <input type="text" name="name" placeholder="Item Name" />
        <p>Item Description</p>
        <textarea name="description" placeholder="Item Description" />
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

export default ReusableForm;
