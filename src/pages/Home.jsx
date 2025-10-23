import React from 'react'
import { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import {ProductContext} from '../context/ProductContext'


const Home = () => {

  // const [products, setProducts] = useState([]);
  const products = useContext(ProductContext);
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => console.error(err));
  // }, []); 

  return (
    <>
   
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
    </div>
    

    
    </>
  )
}

export default Home