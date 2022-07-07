// admin admin

const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/product-routes');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user-routes');
//Middlewares 
app.use(express.json());
app.use(cors());
app.use('/Products', router); // localhost:5000/products
app.use(morgan());
app.use('/api/auth', authRoutes);
app.use('/Users', userRoutes);

mongoose.connect("mongodb+srv://admin:admin@cluster0.dshsqf3.mongodb.net/GamingProducts?retryWrites=true&w=majority")
.then(() => console.log("Successfully connected to DB"))
.then(() => {
    app.listen(5000)
}).catch((err) => console.log(err));