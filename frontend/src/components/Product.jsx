import React, { useContext } from 'react' 
import './Product.scss'
import { cartContext } from '../App';
const Product = ({product}) => {
  const {cart, setCart, count, setCount, products, setProducts} = useContext(cartContext);
  
  const addCart = (pid) => {
    setCart([...cart, product]);
    count [pid] = 1;
    console.log(count)
  }
  const removeCart = (pid) => {
    setCart(cart.filter((c)=>c.nid !== product.nid))
    delete count[pid];
  }
  return(
    <div className="product-item">
      <img src={`https://backend.ddev.site${product.field_pdtimage}`} alt={product.field_title}/>
      <div className='product-description'>
        <p>{product.field_title}</p>
        <div className="product-action">
          <span>${product.field_price}</span>
          {cart.includes(product)?
            (<button className='btn-remove' onClick={() => {removeCart(product.nid)}}>Remove from cart</button>) 
            : (<button className="addto-cart-btn" onClick={() => {addCart(product.nid)} }>Add to cart</button>)}
        </div>
      </div>
  </div>
  )

}

export default Product