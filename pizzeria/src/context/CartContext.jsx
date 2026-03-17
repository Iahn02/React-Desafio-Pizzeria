/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const pizzaIndex = cart.findIndex((item) => item.id === pizza.id);

    if (pizzaIndex >= 0) {
      const newCart = [...cart];
      newCart[pizzaIndex].count++;
      setCart(newCart);
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    const newCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setCart(newCart);
  };

  const decreaseQuantity = (id) => {
    const newCart = cart
      .map((pizza) => {
        if (pizza.id === id) {
          return { ...pizza, count: pizza.count - 1 };
        }
        return pizza;
      })
      .filter((pizza) => pizza.count > 0);
    setCart(newCart);
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};
