import { orderReducer } from "../Reducers/order";

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
