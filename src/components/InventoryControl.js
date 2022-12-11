import React from "react";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
      mainItemList: [
        {
          name: "Poke Ball",
          description: "It has a simple red and white design, and it's the most known kind of Poké Ball.",
        },
        {
          name: "Great Ball",
          description: "It is slightly better than the regular Poké Ball.",
        },
        {
          name: "Ultra Ball",
          description: "It is twice as good as a regular Poké Ball.",
        },
      ],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formShowing: !prevState.formShowing,
    }));
  };

  handleAddNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      formShowing: false,
      mainItemList: newMainItemList,
    });
  };

  render() {
    let currentlyDisplaying = null;
    let buttonText = null;

    if (this.state.formShowing) {
      currentlyDisplaying = <NewItemForm onNewItemCreation={this.handleAddNewItemToList} />;
      buttonText = "Return to Item List";
    } else {
      currentlyDisplaying = <ItemList itemList={this.state.mainItemList} />;
      buttonText = "Add New Item";
    }

    return (
      <React.Fragment>
        {currentlyDisplaying}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default InventoryControl;
