// import..

export const ProductCard = ({ handleAddToCart, products }) => {
  const { icon, name, price } = products;
  return (
    <div className="card">
      <div>
        <div className="card-icon">{icon}</div>
        <h3>{name}</h3>
        <div className="price">{price.toLocaleString("ru-RU")} ₸</div>
      </div>
      <button className="add-btn" onClick={() => handleAddToCart(products)}>
        В корзину
      </button>
    </div>
  );
};
