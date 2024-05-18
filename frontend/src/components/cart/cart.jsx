import React, {useState, useEffect, useContext} from 'react'
import { ShopContext } from '../../context/ShopContext';
import axios from 'axios';

export const Cart = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://backend.ddev.site/products?_format=json')
      .then(res => {
        console.log(res.data); // Log the data received from the API
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const { cartItems } = useContext(ShopContext);

  console.log(cartItems); // Log the products array

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart items</h1>
      </div>
      <div className='cartItems'>
        {products.map((product) => {
          // if (cart[product.nid]!==0) {
          //   return <CartItem data={product} key={product.nid + '-cart'} />;
          // }
          // return null; // Ensure you always return something from the map function
        })}
      </div>
    </div>
  );
};
