// admin admin

const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/product-routes');
const uRouter = require('./routes/user-routes');
const cors = require('cors');
const app = express();

//Middlewares 
app.use(express.json());
app.use(cors());
app.use('/Products',router) // localhost:5000/products
app.use('/api', uRouter);

mongoose.connect("mongodb+srv://admin:admin@cluster0.dshsqf3.mongodb.net/GamingProducts?retryWrites=true&w=majority")
.then(() => console.log("Successfully connected to DB"))
.then(() => {
    app.listen(5000)
}).catch((err) => console.log(err));