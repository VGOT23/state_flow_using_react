import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);

  const totalPrice = useMemo(() => {
    console.log("Calculating total...");
    return state.cart.reduce((total, item) => total + item.price, 0);
  }, [state.cart]);

  return (
    <div className="container">
      <h2>Cart</h2>

      {state.cart.map(item => (
        <div key={item.id}>
          {item.name} - ₹ {item.price}
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹ {totalPrice}</h3>

      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
