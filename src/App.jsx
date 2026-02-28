import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Reports from "./pages/Reports";

import { AppContext } from "./context/AppContext";
import "./App.css";

const App = () => {
  const { theme } = useContext(AppContext);

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
};

export default App;