import React from 'react'

export const CartItem = (props) => {
  const {field_price, field_title, field_pdtimage} = props.data;
  return (
    <div className="cartItem">
      <img src={field_pdtimage} alt={field_title}/>
      <div className="cartItem-description">
        <p>{field_title}</p>
        <p>${field_price}</p>
      </div>
    </div>
  )
}
