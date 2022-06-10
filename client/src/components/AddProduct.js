import { Button, FormLabel, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

      const history = useNavigate();


      const [inputs, setInputs] = useState({

          name:'',
          productType:'',
          description:'',
          price:'',
          image:''




      });

      const [checked, setChecked] = useState(false);

      const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
        [e.target.name]: e.target.value,

        }));
      }

      

      const sendRequest = async () => {

         await axios.post("http://localhost:5000/Products",{
            name:String(inputs.name),
            productType:String(inputs.productType),
            description:String(inputs.description),
            price:Number(inputs.price),
            image:String(inputs.image),
            available:Boolean(checked)

          }).then(res => res.data);

      }

      const handleSubmit = (e) => {
        e.preventDefault(inputs, checked);
        sendRequest().then(() => history('/Products'));
      }


  return (
    

      <form  onSubmit={handleSubmit} >
          <Box  
          display="flex" 
          flexDirection="column" 
          justifyContent={'center'} 
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={10}
          >
              <FormLabel>Name</FormLabel>
              <TextField margin='normal' value={inputs.name}  onChange={handleChange} fullWidth variant='outlined' name='name' ></TextField>

              <FormLabel>Product Type</FormLabel>
              <TextField margin='normal' value={inputs.productType}  onChange={handleChange} fullWidth variant='outlined' name='productType' ></TextField>

              <FormLabel>Description</FormLabel>
              <TextField margin='normal' value={inputs.description}  onChange={handleChange} fullWidth variant='outlined' name='description' ></TextField>

              <FormLabel>Price</FormLabel>
              <TextField type="number" margin='normal' value={inputs.price}  onChange={handleChange} fullWidth variant='outlined' name='price' ></TextField>

              <FormLabel>Image</FormLabel>
              <TextField margin='normal' value={inputs.image}  onChange={handleChange} fullWidth variant='outlined' name='image' ></TextField>

              <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}  label="Available" />
             

              <Button variant="contained" type='submit'>Add Product</Button>
          </Box>



      </form>



  );
}

export default AddProduct