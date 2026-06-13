import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      <h3>Total: ${total}</h3>

      {items.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            width="100"
          />

          <h4>{item.name}</h4>

          <p>Price: ${item.price}</p>

          <p>
            Total:
            ${item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              dispatch(
                increaseQuantity(item.id)
              )
            }
          >
            +
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(
                decreaseQuantity(item.id)
              )
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <button
        onClick={() =>
          alert("Coming Soon")
        }
      >
        Checkout
      </button>

      <Link to="/plants">
        <button>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default CartItem;