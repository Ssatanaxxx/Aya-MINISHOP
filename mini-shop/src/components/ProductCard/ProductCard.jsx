// import..

export const ProductCard = ({  product , handleAddToCart }) => {
  const { icon, name, price } = product;
  return (
    <div className="card">
      <div>
        <div className="card-icon">{icon}</div>
        <h3>{name}</h3>
        <div className="price">{price.toLocaleString("ru-RU")} ₸</div>
      </div>
      <button className="add-btn" onClick={() => handleAddToCart(product)}>
        В корзину
      </button>
    </div>
  );
};
