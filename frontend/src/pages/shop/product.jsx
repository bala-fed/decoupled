import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

const Product = (props) => {
 const {field_price, field_title, nid, field_pdtimage} = props.data;
 const {addToCart} = useContext(ShopContext); 
  return (
   <div className="product-item">
    <img src={`https://backend.ddev.site${field_pdtimage}`} alt={field_title}/>
    <div className='product-description'>
      <p>{field_title}</p>
      <div className="product-action">
        <span>${field_price}</span>
        <button className='addToCartBtn' onClick={() => addToCart(parseInt(nid))}>Add to Cart</button>
      </div>
    </div>
  </div>
  )
}

export default Product