import { ProductCard } from "../ProductCard/ProductCard";

export const ProductList = ({ products = [], handleAddToCart }) => {
  return (
    <section className="products-grid">
      {products.map((prod) => (
        <ProductCard
          key={prod.id}
          product={prod}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </section>
  );
};
