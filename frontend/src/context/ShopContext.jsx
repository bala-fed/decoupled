import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const ShopContext = createContext(null);


const getDefaultCart = () => {
  let cart = {};
  let [products,setProducts] = useState([]);
  for (let i=1; i<products.length+1; i++) {
    cart [i] = 0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartitems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    if (cartItems[itemId]==0) {
      setCartitems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
  }

  const removeFromCart = (itemId) => {
    setCartitems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const contexValue = {cartItems, addToCart, removeFromCart}
  console.log(cartItems)
  return <ShopContext.Provider value={contexValue}>
    {props.children}
  </ShopContext.Provider>
}
