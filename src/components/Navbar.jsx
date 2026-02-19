import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Store</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
