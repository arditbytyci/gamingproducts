import { Button } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import "./Product.css"
const Product = (props) => {
    const {_id,name,productType,description,price,image} = props.product;
    const history = useNavigate();
    const deleteHandler = async () => {
        await axios.delete(`http://localhost:5000/products/${_id}`).then(res=>res.data).then(()=>history("/")).then(()=> history("/products"));
    }
  return ( 
     <div className='card'>

        <img src={image} alt={name} width={150} height={150} />

        <article> Type: {productType}</article>

         <h3>{name}</h3>

         <p>{description}</p>
         <h2>$ {price} </h2>
        <Button LinkComponent={Link} to={`/products/${_id}`} >Update</Button>
        <Button onClick={deleteHandler} >Delete</Button>
     </div>
  );
}

export default Product