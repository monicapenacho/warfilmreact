import React, { createContext, useState } from 'react';

export const CartContext = createContext();          

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);             // Inicializa el estado del carrito como un array vacío

  const addToCart = (film) => {                  // Ver abajo explicación
    setCart((prevCart) => {
      const existingFilm = prevCart.find((item) => item.id === film.id);
      if (existingFilm) {
        return prevCart.map((item) =>
          item.id === film.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...film, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

