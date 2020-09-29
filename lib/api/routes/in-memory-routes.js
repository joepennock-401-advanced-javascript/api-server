'use strict';

/* This is all the routing for version 1 of this API. All routes are using an in-memory storage method. Each time the server restarts, the in-memory "database" will be erased. Run a POST to a selected category first to ensure the storage has contents. */

'use strict';

/**
 * All required dependencies.
 */
const memoryCategoryHandler = require('../handlers/memory-handlers/memory-category-handlers.js');
const memoryProductHandler = require('../handlers/memory-handlers/memory-product-handlers');
const express = require('express');
const memoryRouter = express.Router();

/* PRODUCT ROUTES */

// create one new product
memoryRouter.post('/categories', memoryCategoryHandler.createOneCategory);

// get all products
memoryRouter.get('/categories', memoryCategoryHandler.getAllCategories);

// get one product by id
memoryRouter.get('/categories/:id', memoryCategoryHandler.getOneCategoryById);

// update a product in the db by id
memoryRouter.put('/categories/:id', memoryCategoryHandler.updateCategoryById);

// delete one product by id
memoryRouter.delete('/categories/:id', memoryCategoryHandler.deleteOneCategoryById);

/* CATEGORY ROUTES */

// create one new product
memoryRouter.post('/products', memoryProductHandler.createOneProduct);

// get all products
memoryRouter.get('/products', memoryProductHandler.getAllProducts);

// get one product by id
memoryRouter.get('/products/:id', memoryProductHandler.getOneProductById);

// update a product in the db by id
memoryRouter.put('/products/:id', memoryProductHandler.updateProductById);

// delete one product by id
memoryRouter.delete('/products/:id', memoryProductHandler.deleteOneProductById);

module.exports = memoryRouter;