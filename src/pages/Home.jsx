import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}>StateFlow Store</h1>

      <Link to="/products">
        <button className="button-primary" style={{ marginBottom: "40px" }}>
          Explore Products
        </button>
      </Link>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
        }}
      >
        <div className="card">
          <h3>Global State Management</h3>
          <p>
            Powered by Context API to manage theme and cart state across
            the entire application without prop drilling.
          </p>
        </div>

        <div className="card">
          <h3>Redux Toolkit Architecture</h3>
          <p>
            Structured state transitions using Redux Toolkit for predictable
            updates and scalable architecture.
          </p>
        </div>

        <div className="card">
          <h3>Performance Optimized</h3>
          <p>
            useMemo ensures optimized derived calculations like total cart
            pricing and prevents unnecessary re-renders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;