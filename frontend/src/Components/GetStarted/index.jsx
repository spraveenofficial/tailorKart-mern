import "./style.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <div className="getting-started-container">
      <div className="getting-started-image">
        <img src="/images/getting-started.png" alt="Getting Started" />
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
