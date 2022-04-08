import { createContext, useContext, useEffect, useReducer } from "react";
import { loadUser } from "../Actions";
import { authReducer } from "../Reducers/auth";
const authContext = createContext();

const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const initialState = {
    isAuthenticated: false,
    loading: localStorage.getItem("token") ? true : false,
    user: null,
    addresses: [],
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      loadUser(dispatch);
    }
  }, [token, dispatch]);
  return (
    <authContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        addresses: state.addresses,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
