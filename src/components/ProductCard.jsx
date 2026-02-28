import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h3>{product.title}</h3>
      <p>Price: ₹{product.price}</p>

      <button
        className="button-primary"
        onClick={() => dispatch(addItem(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;