'use strict';

const productHandler = require('../handlers/product-handlers');
const express = require('express');
const router = express.Router();

// create one new product
router.post('/products', productHandler.createOneProduct);

// get all products
router.get('/products', productHandler.getAllProducts);

// get one product by id
router.get('/products/:id', productHandler.getOneProductById);

// update a product in the db by id
router.put('/products/:id', productHandler.updateProductById);

// delete one product by id
router.delete('/products/:id', productHandler.deleteOneProductById);

module.exports = router;