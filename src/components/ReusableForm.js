import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.onFormSubmission}>
        <p>Item Name</p>
        <input type="text" name="name" placeholder="Item Name" />
        <p>Item Description</p>
        <textarea name="description" placeholder="Item Description" />
        <p>Quantity</p>
        <input type="text" name="quantity" placeholder="Quantity" />
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  onFormSubmission: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
