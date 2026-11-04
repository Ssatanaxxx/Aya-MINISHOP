import {useState} from "react";
import "./styles.css";

const PRODUCTS = [
  { id: 1, name: "Беспроводные наушники", price: 45000, icon: "🎧" },
  { id: 2, name: "Механическая клавиатура", price: 62000, icon: "⌨️" },
  { id: 3, name: "Игровая мышь", price: 28000, icon: "🖱️" },
  { id: 4, name: 'Монитор 27" 144Hz', price: 145000, icon: "🖥️" },
  { id: 5, name: "USB-хаб Type-C", price: 16000, icon: "🔌" },
  { id: 6, name: "Подставка под ноутбук", price: 12000, icon: "💻" },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === productId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean),
    );
  };

  const handleClearCart = () => setCart([]);

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <header className="header">
        <h1>TechStore</h1>
        <button className="cart-btn">Корзина: {totalCount} шт.</button>
      </header>

      <div className="container">
        <section className="products-grid">
          {PRODUCTS.map((prod) => (
            <div key={prod.id} className="card">
              <div>
                <div className="card-icon">{prod.icon}</div>
                <h3>{prod.name}</h3>
                <div className="price">
                  {prod.price.toLocaleString("ru-RU")} ₸
                </div>
              </div>
              <button className="add-btn" onClick={() => handleAddToCart(prod)}>
                В корзину
              </button>
            </div>
          ))}
        </section>

        {/* Корзина */}
        <aside className="cart-sidebar">
          <h2>Корзина</h2>
          {cart.length === 0 ? (
            <p className="empty-msg">Корзина пока пуста</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <strong>{item.name}</strong>
                    <span>
                      {(item.price * item.quantity).toLocaleString("ru-RU")} ₸
                    </span>
                  </div>
                  <div className="quantity-controls">
                    <button
                      className="qty-btn"
                      onClick={() => handleUpdateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => handleUpdateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              <div className="total-section">
                <span>Итого:</span>
                <strong>{totalPrice.toLocaleString("ru-RU")} ₸</strong>
              </div>

              <button
                className="checkout-btn"
                onClick={() => {
                  alert(
                    `Заказ оформлен на сумму ${totalPrice.toLocaleString("ru-RU")} ₸`,
                  );
                  handleClearCart();
                }}
              >
                Оформить заказ
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
