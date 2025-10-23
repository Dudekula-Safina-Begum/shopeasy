import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const products = useContext(ProductContext);
  const {cart,addToCart} = useContext(CartContext)
  const Navgate=useNavigate()
  const { id } = useParams(); // ✅ get the id directly
  const [product, setProduct] = useState(null);

 function AddToCart(product){
  addToCart(product)
  // console.log("clicked")
  Navgate('/cart')
  // console.log(cart)
  alert("Item is add to Cart")
 }

  useEffect(() => {
    if (products.length > 0) {
      // ✅ Find the product by matching ID (convert to number)
      const selectedProduct = products.find(
        (item) => item.id === Number(id)
      );
      setProduct(selectedProduct);
    }
  }, [id, products]);

  if (!product) {
    return <p className="text-center mt-10 text-gray-500">Loading product...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row items-center gap-6">
      {/* 🔹 Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-64 w-64 object-contain rounded"
      />

      {/* 🔹 Product Info */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-3">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-blue-600 mb-4">
          ${product.price}
        </p>

        <button onClick={()=>{AddToCart(product)}} className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
