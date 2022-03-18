import "./style.css";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
// import NotFound from "./notfound.svg";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <img src="/images/notfound.svg" alt="" />
      <h1>404 || Not Found</h1>
      <Button
        onClick={() => navigate("/")}
        className="mt-10 btn"
        name="Back To Home"
      />
    </div>
  );
};

export default ErrorPage;
