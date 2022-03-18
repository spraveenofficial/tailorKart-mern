import "./style.css";
import Button from "../../Components/Button";
import { useEachProduct } from "../../Hooks/products";
import { loadEachProduct } from "../../Actions/products";
import { useEffect, useState } from "react";
import { useCart } from "../../Contexts";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import NotFoundPage from "../404";
import Toast from "../../Components/Toast";
const Product = () => {
  const { id } = useParams();
  const { setCart, cart } = useCart();
  const navigate = useNavigate();
  const [toast, setToast] = useState(false);
  const { loading, success, product, dispatch } = useEachProduct();
  useEffect(() => {
    loadEachProduct(id, dispatch);
  }, []);
  const isInCart = cart.some((item) => item._id === product._id);
  const addToCart = (product) => {
    setToast((prev) => !prev);
    setCart({ type: "ADD_TO_CART", payload: product });
  };
  return loading ? (
    <Loader />
  ) : !loading && success ? (
    <div className="product group">
      <div className="col-1-2 product-image">
        <div>
          <img className="product-bg" src={product.image} alt="" />
        </div>
        <div className="indicator">
          <div className="dot one"></div>
          <div className="dot two"></div>
          <div className="dot three"></div>
          <div className="dot four"></div>
          <div className="dot five"></div>
        </div>
      </div>
      <div className="col-1-2 product-info">
        <h1>{product.title}</h1>
        <div className="product-price">
          <h2>
            ₹{product.price}{" "}
            <span className="price-before">₹{product.originalPrice}</span>
          </h2>
          {product.discount > 2 && <p>Special Price</p>}
        </div>
        <div className="select-dropdown">
          <select>
            <option defaultValue="" disabled selected hidden>
              Select Size
            </option>
            <option defaultValue="size">Small</option>
            <option defaultValue="size">Medium</option>
            <option defaultValue="size">Large</option>
          </select>
        </div>
        {!isInCart ? (
          <Button name="Add to Cart" onClick={() => addToCart(product)} />
        ) : (
          <Button
            isGreen="true"
            name="Added To Cart"
            onClick={() => navigate("/cart")}
          />
        )}
        <p className="mb-10">{product.description}</p>
        <ul>
          <li>This Product is Exculsively available on TailorKart.</li>
          <li>This is 100 % legit Product.</li>
          <li>This is Eligible for Return.</li>
          <li>This product is available across India.</li>
        </ul>
      </div>
      {toast && <Toast success="true" message="Successfully Added to Cart." />}
    </div>
  ) : (
    <NotFoundPage />
  );
};

export default Product;
