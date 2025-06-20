import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  
  const updateQuantity = (productId, quantity) => {
      setCart(prevCart => prevCart.map(item => 
        item.id === productId ? {...item, quantity: quantity} : item
      ).filter(item => item.quantity > 0));
  };
  
  const clearCart = () => {
      setCart([]);
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount: cart.reduce((count, item) => count + item.quantity, 0),
    totalPrice: cart.reduce((total, item) => total + item.price * item.quantity, 0),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
