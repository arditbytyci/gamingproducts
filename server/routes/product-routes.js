const express = require("express");
const { route } = require("express/lib/application");

const router = express.Router();
const Product = require("../model/Product");
const productsController = require("../controllers/products-controller");


router.get("/", productsController.getAllProducts);
router.post("/", productsController.addProducts);
router.get("/:id", productsController.getById);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;