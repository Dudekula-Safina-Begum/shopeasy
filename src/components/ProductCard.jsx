import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  // const productid=useParams()
   const navigate = useNavigate();
 
  // console.log(product)
  return (
    <div className="border rounded-xl shadow my-5 p-4 hover:scale-105 transition-all duration-200 bg-white flex flex-col">
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
      <p className="text-gray-600 mt-2 font-medium text-lg">${product.price}</p>

      {/* 🔹 View Details Button → Dynamic Route */}
      <button
        onClick={()=>{
          
          
          navigate(`/product/${product.id}`)
        }}
        className="mt-4 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Details
      </button>
    </div>
  );
}

export default ProductCard;
