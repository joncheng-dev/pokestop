import React from "react";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import ItemDetail from "./ItemDetail";
import EditItemForm from "./EditItemForm";
import ShoppingCart from "./ShoppingCart";

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
      mainItemList: [],
      selected: null,
      editing: false,
      shoppingCart: [],
    };
  }

  handleClick = () => {
    if (this.state.selected !== null) {
      this.setState({
        selected: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formShowing: !prevState.formShowing,
      }));
    }
  };

  handleAddNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      formShowing: false,
      mainItemList: newMainItemList,
    });
  };

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.filter((item) => item.id === id)[0];
    this.setState({
      selected: selectedItem,
    });
  };

  handleDeletingSelectedItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter((item) => item.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selected: null,
    });
  };

  handleEditClick = () => {
    this.setState({
      editing: true,
    });
  };

  handleEditItemInList = (editedItem) => {
    const newMainItemList = this.state.mainItemList.filter((item) => item.id !== this.state.selected.id).concat(editedItem);
    this.setState({
      mainItemList: newMainItemList,
      selected: null,
      editing: false,
    });
  };

  handleRestockClick = (itemToUpdate) => {
    const updatedItem = (itemToUpdate.quantity += 1);
    const updatedQuantityItemInList = this.state.mainItemList
      .filter((item) => item.id !== this.state.selected.id)
      .concat((updatedItem.quantity += 1));
    this.setState({
      mainItemList: updatedQuantityItemInList,
    });
  };

  handleAddItemToCart = (addedItem) => {
    const updatedCartItems = this.state.mainItemList.filter((item) => item.id === this.state.selected.id).concat(addedItem);
    this.setState({
      selected: null,
      editing: false,
      shoppingCart: updatedCartItems,
    });
  };

  render() {
    let currentlyDisplaying = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyDisplaying = <EditItemForm item={this.state.selected} onEditItem={this.handleEditItemInList} />;
      buttonText = "Return to Item List";
    } else if (this.state.selected !== null) {
      currentlyDisplaying = (
        <ItemDetail
          item={this.state.selected}
          onDeleteClick={this.handleDeletingSelectedItem}
          onEditClick={this.handleEditClick}
          onRestockClick={this.handleRestockClick}
        />
      );
      buttonText = "Return to Item List";
    } else if (this.state.formShowing) {
      currentlyDisplaying = <NewItemForm onNewItemCreation={this.handleAddNewItemToList} />;
      buttonText = "Return to Item List";
    } else {
      currentlyDisplaying = <ItemList itemList={this.state.mainItemList} onItemSelection={this.handleChangingSelectedItem} />;
      buttonText = "Add New Item";
    }

    return (
      <React.Fragment>
        <div class="row">
          <div class="column" style={{ float: "left", width: "70%" }}>
            {currentlyDisplaying}
            <button onClick={this.handleClick}>{buttonText}</button>
          </div>
          <div class="column" style={{ float: "right", width: "30%" }}>
            <ShoppingCart />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InventoryControl;
