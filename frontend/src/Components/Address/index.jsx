import "./style.css";
import Input from "../Input";
import { useState } from "react";
import Button from "../Button";
import { useOrder } from "../../Hooks/order";
const Address = ({ onNext, onBack }) => {
  const { state, dispatch } = useOrder();
  console.log(state);
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    pincode: "",
    state: "",
    city: "",
    address: "",
    landmark: "",
  });
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const handleOnNext = () => {
    dispatch({ type: "ADD_ADDRESS", payload: address });
    // onNext();
  };
  return (
    <div className="manage-address">
      <div className="address-manage">
        <div onClick={() => onBack()} className="go-back-address mb-10">
          <i className="fa-solid fa-circle-chevron-left"></i>
        </div>
        <Input
          label="Enter Full Name"
          placeholder="John Doe"
          name="name"
          type="text"
          onChange={handleChange}
          value={address.name}
        />
        <Input
          label="Enter Mobile Number"
          placeholder="91xxxxxxxx"
          name="mobile"
          type="number"
          onChange={handleChange}
          value={address.mobile}
        />
        <Input
          label="Pin Code"
          placeholder="560010"
          name="pincode"
          type="number"
          onChange={handleChange}
          value={address.pincode}
        />
        <Input
          label="Enter State"
          placeholder="Karnataka"
          name="state"
          type="text"
          onChange={handleChange}
          value={address.state}
        />
        <Input
          label="Enter City"
          placeholder="Bangalore"
          name="city"
          type="text"
          onChange={handleChange}
          value={address.city}
        />
        <Input
          label="Enter Full Address"
          placeholder="Address"
          name="address"
          type="text"
          onChange={handleChange}
          value={address.address}
        />
        <Input
          label="Enter Landmark"
          placeholder="Landmark"
          name="landmark"
          type="text"
          onChange={handleChange}
          value={address.landmark}
        />
        <div className="address-btn-save mt-20">
          <Button onClick={() => handleOnNext()} name="Save Address" />
        </div>
      </div>
    </div>
  );
};

export default Address;
