import React from "react";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";

function NewItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();

    props.onNewItemCreation({
      name: event.target.name.value,
      description: event.target.description.value,
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
