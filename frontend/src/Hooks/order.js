import { addAddress } from "../Actions";
import { useAuth } from "../Contexts";
export const useOrder = () => {
  const { addresses, dispatch } = useAuth();
  const setAddress = async (payload) => {
    addAddress(payload, dispatch);
  };

  return { userAddress: addresses, setAddressess: setAddress };
};
