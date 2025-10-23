import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider =({ children }) =>{
  const [cart, setCart] = useState([]);

  // ✅ Add product to cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ✅ Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // ✅ Clear cart
  const clearCart = () => setCart([]);

  const increaseQuantity = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart,increaseQuantity,decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );

}

export default CartProvider