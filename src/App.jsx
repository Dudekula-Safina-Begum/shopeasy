import React, { useContext } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import { CartContext } from './context/CartContext'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {

  // const { cart, addToCart, removeFromCart, clearCart }= useContext(CartContext)
  // console.log(cart,addToCart,removeFromCart,clearCart)
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="product/:id/" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path='contact' element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App