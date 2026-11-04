// import ...

export const CartItem = ({ item, handleUpdateQuantity }) => {
  const { id, name, price, quantity } = item;
  return (
    <div className="cart-item">
      <div className="item-info">
        <strong>{name}</strong>
        <span>{(price * quantity).toLocaleString("ru-RU")} ₸</span>
      </div>
      <div className="quantity-controls">
        <button
          className="qty-btn"
          onClick={() => handleUpdateQuantity(id, -1)}
        >
          -
        </button>
        <span>{quantity}</span>
        <button className="qty-btn" onClick={() => handleUpdateQuantity(id, 1)}>
          +
        </button>
      </div>
    </div>
  );
};
