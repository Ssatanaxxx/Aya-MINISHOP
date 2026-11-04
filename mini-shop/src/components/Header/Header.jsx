export const Header = ({totalCount}) => {
  return (
    <header className="header">
      <h1>TechStore</h1>
      <button className="cart-btn">Корзина: {totalCount} шт.</button>
    </header>
  );
};
