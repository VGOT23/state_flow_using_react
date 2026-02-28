import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, title: "Laptop", price: 55000 },
  { id: 2, title: "Phone", price: 25000 },
  { id: 3, title: "Headphones", price: 3000 },
];

const Products = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px" }}>Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;