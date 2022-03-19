import "./style.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <div className="getting-started-container">
      <div className="getting-started-image">
        <img
          src="https://blog-assets.lightspeedhq.com/img/2021/11/5c5d1482-ecom-shipping_1200x628_retail.jpg"
          alt=""
        />
      </div>
      <div className="getting-started-header">
        <h1 className="getting-started-header-title">Get Started</h1>
        <p className="getting-started-header-subtitle mb-10">
          Get started with your order
        </p>
        <Button
          onClick={() => navigate("/categories/men")}
          name="Get Started"
        />
      </div>
    </div>
  );
};

export default GetStarted;
