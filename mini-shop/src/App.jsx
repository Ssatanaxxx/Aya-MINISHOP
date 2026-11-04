import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import { ProductList } from "./components/PorductList/ProductList";
import { useCart } from "./hooks/useCart";
import { PRODUCTS } from "./data/products";

export default function App() {
  const {
    cart,
    handleUpdateQuantity,
    totalPrice,
    handleClearCart,
    totalCount,
    handleAddToCart,
  } = useCart();

  return (
    <>
      <Header totalCount={totalCount} />

      <main className="container">
        <ProductList products={PRODUCTS} handleAddToCart={handleAddToCart} />
        <Cart
          cart={cart}
          totalPrice={totalPrice}
          handleUpdateQuantity={handleUpdateQuantity}
          handleClearCart={handleClearCart}
        />
      </main>
    </>
  );
}
