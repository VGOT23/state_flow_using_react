import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Smart Store Dashboard
        </h1>
        <p style={{ maxWidth: "600px", margin: "auto", fontSize: "18px" }}>
          A modern React application demonstrating Context API, useReducer,
          and useMemo with optimized state management and performance.
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link to="/products">
            <button>Explore Products</button>
          </Link>
        </div>
      </section>

      <section style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div className="card" style={{ flex: "1" }}>
          <h3>Global State Management</h3>
          <p>
            Powered by Context API to manage theme and cart state across the
            entire application without prop drilling.
          </p>
        </div>

        <div className="card" style={{ flex: "1" }}>
          <h3>Reducer Logic</h3>
          <p>
            Structured state transitions using useReducer for predictable
            updates and scalable architecture.
          </p>
        </div>

        <div className="card" style={{ flex: "1" }}>
          <h3>Performance Optimized</h3>
          <p>
            useMemo ensures optimized derived calculations like total cart
            pricing and prevents unnecessary re-renders.
          </p>
        </div>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2>Why This Project Matters</h2>
        <p>
          This project simulates a small-scale e-commerce application. It
          demonstrates real-world state handling patterns required in
          production-level React applications.
        </p>
      </section>
    </div>
  );
};

export default Home;
