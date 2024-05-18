import React, {useEffect, useState} from 'react'
import './shop.scss'
import Product from './product'
import { Cart } from '../../components/cart/cart'
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
 

export default function Shop() {
  let [products,setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://backend.ddev.site/products?_format=json')
      .then((res) => {
        setProducts(res.data)
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className='shop'>
     <div className="products">
        {products.map((product) => (
          <Product data={product} key={product.nid}/>
        ))}
     </div>
     <div className="view-cart">
        <button className="view-cart-btn">
        <Link to="/cart">View Cart</Link>
        </button>
     </div>
    </div>
  )
}
