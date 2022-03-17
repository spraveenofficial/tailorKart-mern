import { useNavigate } from "react-router-dom";
const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();
  // Make funtion to redirect from categories to product
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
        <button className="ico">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </button>
        <div className="card-text">{title}</div>
        <div className="card-price">
          <span className="price-now"> Rs. {price}</span>
          <span className="price-before">Rs. {originalPrice}</span>
          <span className="discount">({discount}% Off)</span>
        </div>
        <button onClick={() => addToCart(product)} className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
