import React, { useMemo, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity, clearCart } from "../redux/slices/cartSlice";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const { theme } = useContext(AppContext);

  // useMemo for derived total price
  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "dark" ? "#121212" : "#f9f9f9",
        color: theme === "dark" ? "#ffffff" : "#000000",
        minHeight: "100vh",
      }}
    >
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "6px",
              }}
            >
              <h4>{item.title}</h4>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <button
                onClick={() =>
                  dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                }
                disabled={item.quantity <= 1}
              >
                -
              </button>

              <button onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </div>
          ))}

          <hr />

          <h3>Total Items: {totalItems}</h3>
          <h3>Total Price: ₹{totalPrice}</h3>

          <button onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;