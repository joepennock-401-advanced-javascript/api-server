'use strict';

const categoryHandler = require('../handlers/category-handlers');
const express = require('express');
const router = express.Router();

// create one new product
router.post('/categories', categoryHandler.createOneCategory);

// get all products
router.get('/categories', categoryHandler.getAllCategories);

// get one product by id
router.get('/categories/:id', categoryHandler.getOneCategoryById);

// update a product in the db by id
router.put('/categories/:id', categoryHandler.updateCategoryById);

// delete one product by id
router.delete('/categories/:id', categoryHandler.deleteOneCategoryById);

module.exports = router;