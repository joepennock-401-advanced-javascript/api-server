'use strict';

/**
 * Requiring 3rd party dependencies.
 */
const express = require('express');
const app = express();

/**
 * Requiring in custom middleware modules.
 */
const timestamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const notFound = require('./middleware/404');
const serverError = require("./middleware/500");

/**
 * Requiring in separate routes
 */
const productRoutes = require('./routers/products-router');
const categoryRoutes = require('./routers/categories-router');


/**
 * Global express middleware.
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* --- Server-side logic below --- */

 /**
  * In memory 'database'.
  */
// let notMongo = []; 

/**
 * Global custom middleware
 */
app.use(timestamp);
app.use(logger);

/**
 * Express routing
 */

 // test route
app.get('/', (req, res, next) => {
  res.status(200).json('test');
});

app.use(categoryRoutes);
app.use(productRoutes);

/** 
 * product routes 
 */

// // post new product
// app.post('/products', (req, res, next) => {

//   let { category, name, display_name, description } = req.body;
//   let newRecord = { category, name, display_name, description };

//   if(newRecord.name && newRecord.category && newRecord.display_name && newRecord.description) {

//     newRecord.id = uuid();
//     notMongo.push(newRecord);
//     res.status(201).json(newRecord);

//   } else {
//     next('500 error');
//   };

// });

// // get all products
// app.get('/products', (req, res, next) => {

//   res.status(200).json(notMongo);

// });

// // get one product by id
// app.get('/products/:id', (req, res, next) => {
  
//   let id = req.params.id;
//   let record = notMongo.filter( record => {
//     return record.id === id;
//   });
//   res.status(200).json(record[0]);

// });

// // update a product in the db by id
// app.put('/products/:id', (req, res, next) => {

//   let idToUpdate = req.params.id;
//   let { id, category, name, display_name, description} = req.body;
//   let updatedRecord = { id, category, name, display_name, description};
//   notMongo = notMongo.map( record => {
//     return record.id === idToUpdate ? updatedRecord : record;
//   });
//   updatedRecord.id = uuid();
//   res.status(201).json(updatedRecord);

// });

// // delete one product by id
// app.delete('/products/:id', (req, res, next) => {

//   let id = req.params.id;
//   notMongo = notMongo.filter( record => record !== id);

//   res.status(200).json({});

// });

/**
 * category routes
 */

//  // create new category
// app.post('/categories', (req, res, next) => {

//   let { name, display_name, description } = req.body;
//   let newRecord = { name, display_name, description };
//   if (newRecord.name) {

//   newRecord.id = uuid();
//   notMongo.push(newRecord);
//   res.status(201).json(newRecord);

//   } else {
//     next('500 error');
//   };

// });

// // get all category
// app.get('/categories', (req, res, next) => {

//   res.status(200).json(notMongo);

// });

// // get one product by id
// app.get('/categories/:id', (req, res, next) => {
  
//   let id = req.params.id;
//   let record = notMongo.filter( record => {
//     return record.id === id;
//   });
//   res.status(200).json(record[0]);

// });

// // update a category in the db by id
// app.put('/categories/:id', (req, res, next) => {

//   let idToUpdate = req.params.id;
//   let { id, name, display_name, description} = req.body;
//   let updatedRecord = { id, name, display_name, description};
//   notMongo = notMongo.map( record => {
//     return record.id === idToUpdate ? updatedRecord : record;
//   });
//   updatedRecord.id = uuid();
//   res.status(201).json(updatedRecord);

// });

// // delete one category by id
// app.delete('/categories/:id', (req, res, next) => {

//   let id = req.params.id;
//   notMongo = notMongo.filter( record => record !== id);

//   res.status(200).json({});

// });

/**
 * 404 not found error. Route does not exist.
 */
app.use('*', notFound);

/**
 * 500 level server error.
 */
app.use(serverError);

/**
 * This function set the express server to listen for a specified port.
 * @param {*} port - port from .env file.
 */
function start(port) {
  app.listen(port, () => {
    console.log('Server is running on', port);
  });
};

/**
 * Exporting the server module as an object.
 * 'start' is the function starting the server.
 * 'app' is the express server.
 */
module.exports = {
  start: start,
  server: app,
};
