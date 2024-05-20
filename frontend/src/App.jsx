import React,{ useState, createContext } from 'react'
import  {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import ViewCart from './components/ViewCart'


export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState({});
  let [products, setProducts] = useState([]);
  return (
    <cartContext.Provider value={{cart, setCart, count, setCount, products, setProducts}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />}/>
          <Route path="/Cart" element={<ViewCart cart={cart} setCart={setCart}/>}/>
        </Routes>
      </BrowserRouter>
    </cartContext.Provider>
  )
}

export default App
