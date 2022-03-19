import { useCart } from "../../Contexts";
import "./style.css";
const Review = ({  onBack, address }) => {
  const { cart } = useCart();
  const { name, pincode} = address[0];
  return (
    <div className="manage-address">
      <div className="address-manage">
        <div onClick={() => onBack()} className="go-back-address mb-10">
          <i className="fa-solid fa-circle-chevron-left"></i>
        </div>
        <div className="addressSelected">
          <h1 className="text-center">Review Order</h1>
          <div className="address-selected">
            <div className="address-selected-left">
              <h4>We, will deliver to: </h4>
              <p>{name}, {pincode} delivery by 25th March</p>
            </div>
          </div>
        </div>
        <div className="products-review">
          <div className="products-listing-review">
            {cart.map((item) => (
              <div key={item._id} className="products-listing-review-item">
                <div className="products-listing-review-item-left">
                  <img
                    className="product-image"
                    src={item.image}
                    alt="product"
                  />
                  <div className="products-listing-review-item-right">
                    <h3>{item.title}</h3>
                    <div className="flex review-cart-item">
                      <p>₹{item.price}</p>
                      <p>x{item.quantity}</p>
                      <p>=</p>
                      <p>₹{item.price * item.quantity}</p>
                    </div>
                    <p className="mt-10">
                      Expected Delivey by 26th April 2022.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="review-totalamount">
            <div className="review-totalamount-left">
              <p>
                Toat Items : ₹
                {cart.reduce((a, b) => a + b.price * b.quantity, 0)}
              </p>
              <p>Delivery Fee: ₹499</p>
              <p>
                Total Value: ₹
                {cart.reduce((a, b) => a + b.price * b.quantity, 499)}
              </p>
            </div>
          </div>
          <button className="btn full-width mt-10">Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
