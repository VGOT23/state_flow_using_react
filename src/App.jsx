import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  const { state } = useContext(AppContext);

  return (
    <div className={state.theme === "dark" ? "app dark" : "app"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
