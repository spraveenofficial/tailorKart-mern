import { ADD_ADDRESS } from "../Constants/order";
export const orderReducer = (state, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {
        ...state,
        address: [...state.address, action.payload],
      };
  }
};
