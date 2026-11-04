
const PRODUCTS = [
  { id: 1, name: "Беспроводные наушники", price: 45000, icon: "🎧" },
  { id: 2, name: "Механическая клавиатура", price: 62000, icon: "⌨️" },
  { id: 3, name: "Игровая мышь", price: 28000, icon: "🖱️" },
  { id: 4, name: 'Монитор 27" 144Hz', price: 145000, icon: "🖥️" },
  { id: 5, name: "USB-хаб Type-C", price: 16000, icon: "🔌" },
  { id: 6, name: "Подставка под ноутбук", price: 12000, icon: "💻" },
  { id: 7, name: "Подставка под ноутбук", price: 12000, icon: "💻" },
  { id: 86, name: "Подставка под ноутбук", price: 12000, icon: "💻" },
  { id: 6, name: "Подставка под ноутбук", price: 12000, icon: "💻" },
  { id: 6, name: "Подставка под ноутбук", price: 12000, icon: "💻" },
  { id: 6, name: "Подставка под ноутбук", price: 12000, icon: "💻" },
  { id: 6, name: "Подставка под ноутбук", price: 12000, icon: "💻" },
  { id: 6, name: "Подставка под ноутбук", price: 12000, icon: "💻" },
  { id: 6, name: "Подставка под ноутбук", price: 12000, icon: "💻" },
  { id: 6, name: "Подставка под ноутбук", price: 12000, icon: "💻" },
];
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