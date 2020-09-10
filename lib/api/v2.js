'use strict';

/* This is all routing for version 2, or v2, of this API. All routes are using a mongoDB for persistence. */

const mongoProductHandler = require('./handlers/mongo-product-handlers');
const mongoCategoryHandler = require('./handlers/mongo-category-handlers');
const express = require('express');
const mongoRouter = express.Router();

/* PRODUCT ROUTES */

// create one new product
mongoRouter.post('/categories', mongoCategoryHandler.createOneCategory);

// get all products
mongoRouter.get('/categories', );

// get one product by id
mongoRouter.get('/categories/:id', );

// update a product in the db by id
mongoRouter.put('/categories/:id', );

// delete one product by id
mongoRouter.delete('/categories/:id', );

/* CATEGORY ROUTES */

// create one new product
mongoRouter.post('/products', );

// get all products
mongoRouter.get('/products', );

// get one product by id
mongoRouter.get('/products/:id', );

// update a product in the db by id
mongoRouter.put('/products/:id', );

// delete one product by id
mongoRouter.delete('/products/:id', );

module.exports = mongoRouter;