import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartContext  from './context/CartContext.jsx'
import ProductContext from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
   <ProductContext>
      <CartContext>
   <BrowserRouter basename="/shopeasy">
   
   <App />
   </BrowserRouter>
   </CartContext>
   </ProductContext>
   
    
  
)
