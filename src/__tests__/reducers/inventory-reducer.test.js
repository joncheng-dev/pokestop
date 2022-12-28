import inventoryReducer from "../../reducers/inventory-reducer";

describe("inventoryReducer", () => {
  let action;
  const itemData = {
    name: "Great Ball",
    description: "A ball that has a greater capture rate than a regular Poke Ball.",
    quantity: 1,
    id: 1,
  };

  const currentState = {
    1: {
      name: "Great Ball",
      description: "A ball that has a greater capture rate than a regular Poke Ball.",
      quantity: 1,
      id: 1,
    },
    2: {
      name: "Ultra Ball",
      description: "A ball with much greater capture rate than a regular Poke Ball.",
      quantity: 1,
      id: 2,
    },
  };

  test("Should return default state if no action type passed into reducer", () => {
    expect(inventoryReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new item data to mainItemList", () => {
    const { name, description, quantity, id } = itemData;
    action = {
      type: "ADD_ITEM",
      name: name,
      description: description,
      quantity: quantity,
      id: id,
    };
    expect(inventoryReducer({}, action)).toEqual({
      [id]: {
        name: name,
        description: description,
        quantity: quantity,
        id: id,
      },
    });
  });

  test("Should successfully delete an item", () => {
    action = {
      type: "DELETE_ITEM",
      id: 1,
    };
    expect(inventoryReducer(currentState, action)).toEqual({
      2: {
        name: "Ultra Ball",
        description: "A ball with much greater capture rate than a regular Poke Ball.",
        quantity: 1,
        id: 2,
      },
    });
  });
});
