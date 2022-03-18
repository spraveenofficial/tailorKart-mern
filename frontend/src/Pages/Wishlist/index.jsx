import "./style.css";
import { useCart } from "../../Contexts";
const Wishlist = () => {
  const { wishlist, setCart } = useCart();
  const removeProductFromWishlist = (product) => {
    setCart({ type: "REMOVE_FROM_WISHLIST", payload: product });
  };
  const addToCart = (product) => {
    setCart({ type: "ADD_TO_CART", payload: product });
    setCart({ type: "REMOVE_FROM_WISHLIST", payload: product });
  };
  return wishlist.length === 0 ? (
    <div className="error-page">
      <h1>Your Wishlist is Empty.</h1>
    </div>
  ) : (
    <div className="wishlist-page">
      <h1 className="text-center mb-10">Wishlist</h1>
      <div className="wishlish-items flex">
        {wishlist.map((item) => {
          const { _id, title, price, image, originalPrice, discount } = item;
          return (
            <div key={_id} id="card" className="card ecom">
              <div className="product-image">
                <img src={image} alt="image" />
              </div>
              <div className="cart-badge">
                <button className="ico">
                  <i
                    style={{ color: "red" }}
                    className="fas fa-heart"
                    aria-hidden="true"
                  ></i>
                </button>
                <div className="card-text">{title}</div>
                <div className="card-price">
                  <span className="price-now"> Rs. {price}</span>
                  <span className="price-before">Rs. {originalPrice}</span>
                  <span className="discount">({discount}% Off)</span>
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="btn btn-primary mb-10"
                >
                  Move to Cart
                </button>
                <button
                  onClick={() => removeProductFromWishlist(item)}
                  className="btn full-width"
                >
                  Remove From Wishlist
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
