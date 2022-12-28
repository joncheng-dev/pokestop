import inventoryReducer from "../../reducers/inventory-reducer";

describe("inventoryReducer", () => {
  test("Should return default state if no action type passed into reducer", () => {
    expect(inventoryReducer({}, { type: null })).toEqual({});
  });
});
