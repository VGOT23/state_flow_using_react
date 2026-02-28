import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { theme } = useContext(AppContext);

  return (
    <nav
      style={{
        backgroundColor: "var(--card-bg)",
        borderBottom: "1px solid var(--border)",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>StateFlow Store</h2>

      <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "var(--text)" }}
        >
          Home
        </Link>

        <Link
          to="/products"
          style={{ textDecoration: "none", color: "var(--text)" }}
        >
          Products
        </Link>

        <Link
          to="/cart"
          style={{ textDecoration: "none", color: "var(--text)" }}
        >
          Cart
        </Link>

        <Link
          to="/reports"
          style={{ textDecoration: "none", color: "var(--text)" }}
        >
          Reports
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;