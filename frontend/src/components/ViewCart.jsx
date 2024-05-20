import React, { useContext, useEffect, useState } from 'react';
import './Cart.scss';
import { cartContext } from '../App';
import cartIcon from '../assets/cart-icon.svg'
import deleteIcon from '../assets/delete-icon.svg'
import cartDecrement from '../assets/cart-decrement.svg'
import cartIncrement from '../assets/cart-increment.svg'

function ViewCart() {
  const { cart , setCart, count, products} = useContext(cartContext);
  const [counter, setCount] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const initialCount = cart.reduce((acc, product) => {
      acc[product.nid] = product.quantity;
      return acc;
    }, {});
    setCount(count);
    console.log(counter)
  }, [cart]);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.field_price * (counter[curr.nid] || 0)), 0));
  }, [cart, counter]);

  const decrement = (nid) => {
    setCount((prevCount) => ({
      ...prevCount,
      [nid]: Math.max((prevCount[nid] || 0) - 1, 0), // Ensure quantity doesn't go below 0
    }));
  };

  const increment = (nid) => {
    setCount((prevCount) => ({
      ...prevCount,
      [nid]: (prevCount[nid] || 0) + 1,
    }));
  };
  function handleremove(nid) {
     
    setCart(cart.filter((c)=>c.nid !== nid))
    delete count[nid];
     
  }
  return (
    <div className="cart-container">
      
      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
      <div>
        <h3><span><img src={cartIcon}/></span>Order Summary</h3>
        <table className="cart-items-table">
          <thead>
            <tr className='cart-item-head cart-item'>
              <th className='cart-item-img'></th>
              <th className='cart-item-title'>
                <p>Name</p>
              </th>
              <th className="cart-itme-price">
                <span>Price</span>
              </th>
              <th className="cart-item-qty">
                Quantity
              </th>
              <th className="cart-item-total">
                Total
              </th>
              <th className="cart-item-remove"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr className='cart-item' key={product.nid}>
                <td className='cart-item-img'>
                  <img src={`https://backend.ddev.site${product.field_pdtimage}`} alt={product.field_title} />
                </td>
                <td className='cart-item-title'>
                  <p>{product.field_title}</p>
                </td>
                <td className="cart-item-price">
                  <span>${product.field_price}</span>
                </td>
                <td className="cart-item-qty">
                  <button onClick={() => decrement(product.nid)}>
                    <img src={cartDecrement} alt="Decrease the quantity"/>
                  </button>
                  <span>{counter[product.nid]}</span>
                  <button onClick={() => increment(product.nid)}> 
                    <img src={cartIncrement} alt="Increase the quantity"/>
                  </button>
                </td>
                <td className="cart-item-total">
                  ${counter[product.nid] * product.field_price}
                </td>
                <td className="cart-item-remove">
                  <button className="remove-btn" onClick={()=>handleremove(product.nid)}><img src={deleteIcon} alt="Remove from cart"/></button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5"><p>Total: ${total}</p></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>)
    }
      
    </div>
  );
}

export default ViewCart;
