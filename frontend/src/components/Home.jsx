import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import Product from './Product';
import { cartContext } from '../App';
import ViewCart from './ViewCart';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Modal from "@mui/material/Modal";


export default function Home() {
  const { cart, setCart, count, setCount, products, setProducts} = useContext(cartContext);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    axios.get('http://backend.ddev.site/products?_format=json')
      .then((res) => {
        setProducts(res.data)
      })
      .catch(err => console.log(err));
  }, []);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '815px',
    height: '500px',
    overflow: 'auto',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
  };
  return (
    <div>
      <div className='shop'>
        <div className="products">
          {products.map((product) => (
            <Product key={product.nid} product={product} />
          ))}
        </div>
      </div>
      <div className="view-cart-container">
        <button className="view-cart-btn purple-btn" onClick={handleOpen}>View Cart</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop={false}
      >
        <Box sx={style}>
          <CloseIcon style={{ position: "absolute", top: "0", right: "0", cursor: "pointer" }}
            onClick={() => handleClose()} />
          <div className="cart-popup">
            <ViewCart />
          </div>
        </Box>
      </Modal>
    </div>
  )
}
