const Product = require('../model/Product');



const getAllProducts = async(req,res,next) => {
    let products;
    try {
        products = await Product.find();
    } catch (err) {
        console.log(err);
    }

    if(!products) {
        return res.status(404).json({message:"No product found"});
    } else {
        return res.status(200).json({products});
    }
}

const getById = async (req,res,next) => {
    const id = req.params.id;
    let product;

    try{
        product = await Product.findById(id);
    } catch(err) {
        console.log(err);
    }

    if(!product) {
        return res.status(404).json({message:"No product found"});
    } else {
        return res.status(200).json({product});
    }


};


const addProducts = async(req,res,next) => {

    const {name,productType,description,price,available,image} = req.body;

    let product;

    try {
        product = new Product({
            name,
            productType,
            description,
            price,
            available,
            image

        });
        await product.save();
    } catch(err) {
        console.log(err);
    }

    if(!product) {
        return res.status(500).json({message:"Unable to add product"});
    } else {
       return res.status(201).json({product});
    }

}


const updateProduct = async (req,res,next) => {
    const id = req.params.id;
    const {name,productType,description,price,available,image} = req.body;
    let product;

    try {
        product = await Product.findByIdAndUpdate(id, {
            name,
            productType,
            description,
            price,
            available,
            image
        });
        product = await product.save();
    } catch(err) {
        console.log(err);
    }
    if(!product) {
        return res.status(404).json({message:"Unable to update product by this ID"});
    } else {
       return res.status(200).json({product});
    }

}

const deleteProduct = async (req,res,next) => {
    const id = req.params.id;

    let product;

    try {
        
        product = await Product.findByIdAndDelete(id);


    } catch (err) {
        console.log(err);
    }

    if(!product) {
        return res.status(404).json({message:"Unable to delete product by this ID"});
    } else {
       return res.status(200).json({message:"Product successfully deleted"});
    }
    

}


exports.getAllProducts = getAllProducts;
exports.addProducts = addProducts;
exports.getById = getById;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;