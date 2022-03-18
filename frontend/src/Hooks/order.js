import { orderReducer } from "../Reducers/order";
import { useReducer } from "react";
export const useOrder = () => {
  const initialState = {
    address: [],
  };
  const [state, dispatch] = useReducer(orderReducer, initialState);
  return {
    state,
    dispatch,
  };
};
