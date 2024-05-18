import React, { useState } from 'react'
import './App.scss'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Shop from './pages/shop/shop'
import { ShopContextProvider } from './context/ShopContext'
import { Cart } from './components/cart/cart'
function App() {
  
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
