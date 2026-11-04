import { CartItem } from "../CartItem/CartItem";
// import ...

export const Cart = ({
  cart,
  totalPrice,
  handleClearCart,
  handleUpdateQuantity,
}) => {
  return (
    <aside className="cart-sidebar">
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p className="empty-msg">Корзина пока пуста</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              UpdateQuantity={handleUpdateQuantity}
            />
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
  );
};
