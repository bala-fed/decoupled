import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://backend.ddev.site/products?_format=json')
      .then((res) => {
        setProducts(res.data);
        const initialCart = res.data.reduce((acc, item) => {
          acc[parseInt(item.nid)] = 0;
          return acc;
        }, {});
        setCart(initialCart);
      })
      .catch(err => console.log(err));
  });
  
  let [cartItems, setCartitems] = useState([]);
  const addToCart = (itemId) => {
    if (cartItems[itemId] !== undefined) {
      setCart(prevCart => ({
        ...prevCart,
        [itemId]: prevCart[itemId] + 1
      }));
    }
  }

  ///console.log(cartItems)
  const removeFromCart = (itemId) => {
    if (cartItems[itemId] !== undefined && cartItems[itemId] > 0) {
      setCart(prevCart => ({
        ...prevCart,
        [itemId]: prevCart[itemId] - 1
      }));
    }
  }

  const contextValue = { cartItems, products, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
