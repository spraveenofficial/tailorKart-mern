export const orderReducer = (state, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
  }
};
