import React from "react";
import Product from "./Product";

function ProductList() {
  const productList = [
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
  ];

  return (
    <React.Fragment>
      <h2>Product List</h2>
      <hr />
      {productList.map((product) => (
        <Product name={product.name} description={product.description} />
      ))}
    </React.Fragment>
  );
}

export default ProductList;
