import "./style.css";
import Input from "../../Components/Input";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toast from "../../Components/Toast";
import { useSignup } from "../../Hooks/auth";
import { signupUser } from "../../Actions";
import Spinner from "../../Components/Spinner";
const Signup = () => {
  const { loading, success, message, dispatch } = useSignup();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    signupUser(
      {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      },
      dispatch
    );
  };
  useEffect(() => {
    success === true &&
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
  }, [success]);
  return (
    <div className="login-page">
      <div className="login">
        <div className="login-header">
          <h2>Signup</h2>
        </div>
        <div className="login-items">
          <Input
            label="Enter Name"
            type="text"
            placeholder="John Doe"
            name="name"
            onChange={handleChange}
          />
          <Input
            label="Enter Email"
            type="email"
            placeholder="johndoe@gmail.com"
            name="email"
            onChange={handleChange}
          />
          <Input
            label="Enter Password"
            type="password"
            placeholder="*********"
            name="password"
            onChange={handleChange}
          />
          <div className="remember-options mt-10">
            <div className="remember">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="Bike"
                className="checkbox"
              />
              <label htmlFor="checkbox">I agree, to all the terms.</label>
              <br />
            </div>
          </div>
          <button onClick={() => handleSubmit()} className="btn loading-btn">
            {loading && <Spinner />}Signup
          </button>
          <div className="have-account flex">
            <Link to="/login">
              <p>Alreay have Account?</p>
            </Link>
          </div>
        </div>
        {!loading && message && <Toast message={message} success={success} />}
      </div>
    </div>
  );
};

export default Signup;
