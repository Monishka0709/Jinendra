// context/CartContext.jsx
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    if (!item) {
    //   console.error("Attempted to add an undefined item to the cart.");
      return;
    }
  
    setCartItems((prev) => {
      const updatedCart = [...prev, item];
      console.log("Updated Cart:", updatedCart); // Now the first item won't be undefined
      return updatedCart;
    });
  };
  
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
