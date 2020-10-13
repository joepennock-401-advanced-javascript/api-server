'use strict';

/* This is all routing for version 2 of this API. All routes are using a mongoDB for persistence. */

const mongoProductHandler = require('../handlers/mongo-handlers/mongo-product-handlers.js');
const mongoCategoryHandler = require('../handlers/mongo-handlers/mongo-category-handlers.js');
const express = require('express');
const mongoRouter = express.Router();

/* PRODUCT ROUTES */

// create one new product
mongoRouter.post('/categories', mongoCategoryHandler.createOneCategory);

// get all products
mongoRouter.get('/categories', mongoCategoryHandler.getAllCategories);

// get one product by id
mongoRouter.get('/categories/:id', mongoCategoryHandler.getOneCategoryById);

// update a product in the db by id
mongoRouter.put('/categories/:id', mongoCategoryHandler.updateOneCategoryById);

// delete one product by id
mongoRouter.delete('/categories/:id', mongoCategoryHandler.deleteOneCategoryById);

/* CATEGORY ROUTES */

// create one new product
mongoRouter.post('/products', mongoProductHandler.createOneProduct);

// get all products
mongoRouter.get('/products', mongoProductHandler.getAllProducts);

// get one product by id
mongoRouter.get('/products/:id', mongoProductHandler.getOneProductById);

// update a product in the db by id
mongoRouter.put('/products/:id', mongoProductHandler.updateOneProductById);

// delete one product by id
mongoRouter.delete('/products/:id', mongoProductHandler.deleteOneProductById);

module.exports = mongoRouter;