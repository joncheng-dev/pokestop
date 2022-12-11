import React from "react";
import ReusableForm from "./ReusableForm";

function EditItemForm(props) {
  const { item } = props;
  function handleEditItemFormSubmission(event) {
    event.preventDefault();

    props.onEditItem({
      name: event.target.name.value,
      description: event.target.description.value,
      id: item.id,
    });
  }
  return (
    <React.Fragment>
      <h2>Edit Item Form</h2>
      <hr />
      <ReusableForm onFormSubmission={handleEditItemFormSubmission} buttonText="Update Item Details" />
      <hr />
    </React.Fragment>
  );
}

export default EditItemForm;
