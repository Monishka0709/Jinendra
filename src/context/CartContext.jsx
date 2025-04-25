// context/CartContext.jsx
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

// console.log(cartItems)
const addToCart = (item, quantity = 1) => {
  if (!item || quantity <= 0) return;

  setCartItems((prev) => {
    const existingItemIndex = prev.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...prev];
      console.log(updatedCart)
      updatedCart[existingItemIndex].quantity += quantity;
      console.log(updatedCart)
      return updatedCart;
    } 
    else {
      return [...prev, { ...item, quantity }];
    }
  });
};

  

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
