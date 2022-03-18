import "./style.css";
import { useCart } from "../../Contexts";
const Cart = ({ onNext }) => {
  const { cart, totalItems, setCart } = useCart();
  const removeProduct = (item) => {
    setCart({ type: "REMOVE_FROM_CART", payload: item });
  };
  const handleIncrease = (item) => {
    setCart({ type: "INCREASE_QUANTITY", payload: item });
  };
  const handleDecrease = (item) => {
    console.log("called");
    setCart({ type: "DECREASE_QUANTITY", payload: item });
  };
  const moveToWishlist = (item) => {
    setCart({ type: "ADD_TO_WISHLIST", payload: item });
    setCart({ type: "REMOVE_FROM_CART", payload: item });
  };
  const totalOriginalPrice = cart.reduce((acc, item) => {
    return acc + Number(item.originalPrice) * Number(item.quantity);
  }, 0);
  const totalDiscount = cart.reduce((acc, item) => {
    return (
      acc +
      (Number(item.originalPrice) - Number(item.price)) * Number(item.quantity)
    );
  }, 0);
  const totalPrice = cart.reduce((acc, item) => {
    return acc + Number(item.price) * Number(item.quantity);
  }, 0);
  return cart.length === 0 ? (
    <div className="error-page">
      <h1>Your cart is Empty.</h1>
    </div>
  ) : (
    <div className="cart-page">
      <div className="cart-header">
        <h1 className="text-center mt-10">My Cart({totalItems} items)</h1>
      </div>
      <div className="cart-div">
        <div className="cart-left-item">
          {cart.map((eachItem) => {
            const {
              _id,
              title,
              price,
              quantity,
              image,
              originalPrice,
              discount,
            } = eachItem;
            return (
              <div key={_id} className="cart-item-product flex mb-10">
                <img src={image} alt="product-img" />
                <div className="cart-item-data flex">
                  <p>{title}</p>
                  <section className="flex text-center align-center">
                    <h3 className="mr-10">₹ {price}</h3>
                    <p className="text-gray ml-10 text-cross">
                      ₹ {originalPrice}
                    </p>
                  </section>
                  <h2 className="text-gray">{discount}% off</h2>
                  <div className="quantity-div flex mb-10">
                    <p>Quantity:</p>
                    <i
                      onClick={() => handleDecrease(eachItem)}
                      className="fa-solid fa-minus"
                    ></i>
                    <input type="number" value={quantity} />
                    <i
                      onClick={() => handleIncrease(eachItem)}
                      className="fa-solid fa-plus"
                    ></i>
                  </div>
                  <button
                    onClick={() => removeProduct(eachItem)}
                    className="btn btn-primary mb-10"
                  >
                    Remove from Cart
                  </button>
                  <button
                    onClick={() => moveToWishlist(eachItem)}
                    className="btn"
                  >
                    Move to Wishlist
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-right-item">
          <div className="checkout-cart">
            <strong>
              <p className="mb-10">PRICE DETAILS</p>
            </strong>
            <hr />
            <div className="rate-justify">
              <p>Price({totalItems} items)</p>
              <p>₹{totalOriginalPrice}</p>
            </div>
            <div className="rate-justify">
              <p>Discount</p>
              <p>₹{totalDiscount}</p>
            </div>
            <div className="rate-justify">
              <p>Delivery Charges</p>
              <p>₹499</p>
            </div>
            <hr />
            <div className="rate-justify">
              <strong>
                <p>TOTAL AMOUNT</p>
              </strong>
              <strong>
                <p>₹{totalPrice + 499}</p>
              </strong>
            </div>
            <hr className="mb-10" />
            <p className="mb-10">
              You will save ₹{totalDiscount} on this order
            </p>
            <button className="btn btn-primary mb-10">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
