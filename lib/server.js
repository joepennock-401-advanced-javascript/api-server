'use strict';

/**
 * Requiring 3rd party dependencies.
 */
const express = require('express');
const app = express();

/**
 * Requiring in custom modules.
 */
const timestamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');

/**
 * Global express middleware.
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * Server-side logic
 */

 /**
  * In memory 'database'.
  */
let notMongo = []; 

/**
 * Global custom middleware.
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

/**
 * This function set the express server to listen for a specified port.
 * @param {*} port - port from .env file.
 */
function start(port) {
  app.listen(port, () => {
    console.log('Server is running on', port);
  });
};

console.log(notMongo);

/**
 * Exporting the server module as an object.
 * 'start' is the function starting the server.
 * 'app' is the express server.
 */
module.exports = {
  start: start,
  server: app,
};
