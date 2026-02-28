import React, { useMemo, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import { AppContext } from "../context/AppContext";

const Reports = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const { theme, user } = useContext(AppContext);

  // Derived values using useMemo
  const totalRevenue = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const totalProducts = useMemo(() => {
    return cartItems.length;
  }, [cartItems]);

  const totalQuantity = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: theme === "dark" ? "#121212" : "#f5f5f5",
        color: theme === "dark" ? "#ffffff" : "#000000",
        minHeight: "100vh",
      }}
    >
      <h2>Reports</h2>

      <p>User: {user?.name || "Guest"}</p>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h3>Cart Summary</h3>
        <p>Total Products: {totalProducts}</p>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Revenue: ₹{totalRevenue}</p>
      </div>

      {cartItems.length > 0 && (
        <button
          style={{ marginTop: "20px" }}
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Reports;