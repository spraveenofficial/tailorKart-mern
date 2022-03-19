import "./style.css";
import Input from "../Input";
import { useState } from "react";
import Button from "../Button";
import { useOrder } from "../../Hooks/order";
const Address = ({ onNext, onBack, setAddress }) => {
  const { userAddress, setAddressess } = useOrder();
  const [selectedAddress, setSelecteAddress] = useState([]);
  const [address, setUserAddress] = useState({
    name: "",
    mobile: "",
    pincode: "",
    state: "",
    city: "",
    address: "",
    landmark: "",
  });
  const handleChange = (e) => {
    setUserAddress({ ...address, [e.target.name]: e.target.value });
  };
  const handleSaveAddress = (e) => {
    setAddressess(address);
  };
  const selectAddress = (e) => {
    setSelecteAddress([e]);
  };
  const handleNext = () => {
    setAddress(selectedAddress);
    onNext();
  };
  return (
    <div className="manage-address">
      <div className="address-manage">
        <div onClick={() => onBack()} className="go-back-address mb-10">
          <i className="fa-solid fa-circle-chevron-left"></i>
        </div>
        {userAddress.length > 0 ? (
          <>
            <h2 className="text-center mb-10">Select Address</h2>
            <div className="address-list">
              {userAddress.map((address, index) => (
                <div
                  onClick={() => selectAddress(address)}
                  className="address-item"
                  key={index}
                  style={{
                    background:
                      selectedAddress.length > 0
                        ? selectedAddress[0].address === address.address
                          ? "#DBDFE6"
                          : "#fff"
                        : null,
                  }}
                >
                  {/* <i class="edit-option fa-solid fa-pen"></i> */}
                  <div className="address-item-header">
                    <div className="address-item-header-name">
                      {address.name}
                    </div>
                    <div className="address-item-header-mobile">
                      {address.mobile}
                    </div>
                  </div>
                  <div className="address-item-body">
                    <div className="address-item-body-address">
                      {address.address}
                    </div>
                    <div className="address-item-body-landmark">
                      {address.landmark}
                    </div>
                    <div className="address-item-body-city">{address.city}</div>
                    <div className="address-item-body-pincode">
                      {address.pincode}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : null}
        {selectedAddress.length > 0 ? (
          <button
            onClick={() => handleNext()}
            className="mt-10 mb-10 btn btn-primary full-width"
          >
            Proceed Order
          </button>
        ) : (
          ""
        )}
        <h2 className="text-center">Add Address</h2>
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
          <Button onClick={() => handleSaveAddress()} name="Save Address" />
        </div>
      </div>
    </div>
  );
};

export default Address;
