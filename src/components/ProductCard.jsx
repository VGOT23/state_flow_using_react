import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(AppContext);

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
      <button
        onClick={() =>
          dispatch({ type: "ADD_TO_CART", payload: product })
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
