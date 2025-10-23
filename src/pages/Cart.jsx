import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ProductCard from '../components/ProductCard'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const {cart,removeFromCart,increaseQuantity,decreaseQuantity,clearCart} = useContext(CartContext)
    const navigate=useNavigate()
    console.log(cart)

  
  
  
  
    return (
      <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-3 ">
        {cart.length ==0 ?  <p className="text-center mt-10 text-gray-500">Cart is empty....</p> :cart.map((product,idx) => (
          <div key={idx} className="border rounded-xl shadow my-5 p-4 hover:scale-105 transition-all duration-200 bg-white flex flex-col">
      {/* 🔹 Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-3"
      />

      {/* 🔹 Product Title */}
      <h2 className="text-lg font-semibold flex-grow  text-blue-700">
        {product.title.length > 40
          ? product.title.slice(0, 40) + "..."
          : product.title}
      </h2>

      {/* 🔹 Price */}
      <div className="flex items-center justify-between mt-2">
  <p className="text-gray-600 font-medium text-lg">${product.price}</p>

  {/* 🔹 Quantity Controls */}
  <div className="flex items-center gap-3">
    <button
      onClick={() => decreaseQuantity(product.id)}
      className="px-3 py-1 bg-gray-200 rounded text-lg font-semibold hover:bg-gray-300 transition"
    >
      −
    </button>

    <span className="text-gray-800 font-medium text-lg">
      {product.quantity}
    </span>

    <button
      onClick={() => increaseQuantity(product.id)}
      className="px-3 py-1 bg-gray-200 rounded text-lg font-semibold hover:bg-gray-300 transition"
    >
      +
    </button>
  </div>
</div>

      {/* 🔹 View Details Button → Dynamic Route */}
      <button
        onClick={()=>{
          
          
          navigate(`/product/${product.id}`)
        }}
        className="mt-4 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Details
      </button>
      <button
        onClick={()=>{
          removeFromCart(product.id)
          alert("Do you want to remov the item")
          
        }}
        className="mt-4 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Remove item
      </button>
    </div>
        ))}

       
    </div>
    <div>
      {cart.length > 0 ? <div className='flex items-center justify-center '>
          <button
        onClick={()=>{
          clearCart()
          
        }}
        className="mt-1  bg-blue-600 text-white text-center py-2 px-2 rounded-lg hover:bg-blue-700 transition"
      >
        Clear the Cart
      </button>
        </div>: <p></p> } 
    </div>
      </>
    

   

  )
}

export default Cart