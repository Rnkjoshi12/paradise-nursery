import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleDecrease = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(decreaseQuantity(item.id));
    }
  };

  return (
    <div className="cart-page">
      <nav className="main-nav product-nav">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>

      <h1 className="page-title">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="empty-state">
          <p>Your cart is empty. Add plants from the product listing to get started.</p>
          <Link to="/plants">
            <button className="button-primary">Browse Plants</button>
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          {items.map((item) => (
            <div className="cart-item cart-card" key={item.id}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details cart-card-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
                <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <div className="cart-item-actions quantity-controls">
                  <button className="button-icon" onClick={() => handleDecrease(item)}>-</button>
                  <span className="cart-item-quantity">{item.quantity}</span>
                  <button className="button-icon" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  <button className="button-secondary cart-item-remove" onClick={() => dispatch(removeItem(item.id))}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Items: {cartCount}</p>
            <p>Total Amount: ${total.toFixed(2)}</p>
            <div className="cart-actions">
              <button className="button-primary" onClick={() => alert("Checkout Coming Soon")}>Checkout</button>
              <Link to="/plants">
                <button className="button-secondary">Continue Shopping</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
