import { useNavigate } from "react-router-dom";
import { useCart } from "../../Contexts";
const ProductCard = ({ product, addToCart, addToWishlist }) => {
  const { cart, wishlist } = useCart();
  const isInWishlist = wishlist.some((item) => item._id === product._id);
  const isInCart = cart.some((item) => item._id === product._id);
  const navigate = useNavigate();
  const redirectToProduct = (path) => {
    navigate(`/product/${path}`);
  };
  const { _id, title, price, image, originalPrice, discount } = product;
  return (
    <div id="card" className="card ecom">
      <div onClick={() => redirectToProduct(_id)} className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="cart-badge">
        <button onClick={() => addToWishlist(product)} className="ico">
          <i
            style={{ color: isInWishlist ? "red" : "black" }}
            className={isInWishlist ? "fas fa-heart" : "fa fa-heart-o"}
            aria-hidden="true"
          ></i>
        </button>
        <div className="card-text">{title}</div>
        <div className="card-price">
          <span className="price-now"> Rs. {price}</span>
          <span className="price-before">Rs. {originalPrice}</span>
          <span className="discount">({discount}% Off)</span>
        </div>
        {!isInCart ? (
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        ) : (
          <button className="btn full-width">Added to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
