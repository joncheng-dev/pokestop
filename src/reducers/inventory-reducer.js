const reducer = (state = {}, action) => {
  const { name, description, quantity, id } = action;
  switch (action.type) {
    case "ADD_ITEM":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          description: description,
          quantity: quantity,
          id: id,
        },
      });
    default:
      return state;
  }
};

export default reducer;
