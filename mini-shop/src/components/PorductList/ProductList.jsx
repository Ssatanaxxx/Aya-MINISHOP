import { ProductCard } from "../ProductCard/ProductCard";


export const ProductList = ({handleAddToCart, products}) => {
  return (
    <section className="products-grid">
      {products.map((product) => (
        <ProductCard
            key = {product.id}
            product = {product}
            onAddToCart = {handleAddToCart}
        />
      ))}
    </section>
  );
};
