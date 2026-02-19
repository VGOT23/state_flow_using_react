import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 }
];

const Products = () => {
  return (
    <div className="container">
      <h2>Products</h2>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
