import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from './Product';
import "./Product.css"

const URL = "http://localhost:5000/products";
const fetchHandler = async () => {

     return await axios.get(URL).then((res) => res.data);

}

const ProductsContainer = () => {

    const [products , setProducts] = useState();

    useEffect(() => {

      fetchHandler().then((data) => setProducts(data.products))

    }, []);
   
  return (
    <div>
       <ul>
      {products && products.map((product,i) => (
        <div className='product' key={i}>
          <Product product={product} />
        </div>
      ))}
        </ul> 
     </div>
  )
}

export default ProductsContainer