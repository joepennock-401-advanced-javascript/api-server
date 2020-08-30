'use strict';

/**
 * Requiring 3rd party dependencies.
 */
const express = require('express');
const app = express();

/**
 * Requiring in custom modules.
 */
const requestTime = require('./middleware/timestamp');
const logger = require('./middleware/logger');

/**
 * Global express middleware.
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

function addProducts(req, res, next){
  req.newProduct = {
    id: "01",
    category: "food",
    name: "yummy food",
    display_name: "this food gets displayed",
    descrition: "really yummy foodstuffs"
  };
  next();
};  


/**
 * Express routing
 */
app.get('/', requestTime, addProducts, (req, res) => {
  
  const parts = {
    query: req,query,
    params: req.params,
    body: req.body,
    newProduct: req.newProduct,
  };
  res.status(200).json(parts);

});

app.post('/products', (req, res) => {
  
});

app.get('/products', requestTime, (req, res) => {

 console.log(req);

});

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

