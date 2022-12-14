import React from "react";
import Header from "./Header";
import InventoryControl from "./InventoryControl";
import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <React.Fragment>
      <Header />
      <hr />
      <InventoryControl />
      <ShoppingCart />
    </React.Fragment>
  );
}

export default App;
