import React from "react";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";

function NewItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();

    props.onNewItemCreation({
      name: event.target.itemName.value,
      description: event.target.itemDescription.value,
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <h2>New Item Form</h2>
      <hr />
      <ReusableForm onFormSubmission={handleNewItemFormSubmission} buttonText="Add New Item" />
      <hr />
    </React.Fragment>
  );
}

export default NewItemForm;
