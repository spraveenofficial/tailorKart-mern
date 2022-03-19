import { useState } from "react";
import Carts from "../../Pages/Cart";
import Review from "../../Pages/Review";
import Address from "../Address";
const Steps = {
  1: Carts,
  2: Address,
  3: Review,
};

const Cart = () => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState([]);
  const Step = Steps[step];
  return (
    <Step
      onNext={() => setStep((prev) => prev + 1)}
      onBack={() => setStep((prev) => prev - 1)}
      address={address}
      setAddress={setAddress}
    />
  );
};

export default Cart;
