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
 * Requiring in separate routes.
 */
const inMemoryRoutes = require('./api/v1.js'); // in memory storage
const mongoRoutes = require('./api/v2.js'); // mongoDB storage

/**
 * Global express middleware.
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * Global custom middleware.
 */
app.use(timestamp);
app.use(logger);

/**
 * Express routing.
 */

 // test route
app.get('/', (req, res, next) => {
  res.status(200).json('test');
});

/**
 * Imported routes.
 */
app.use('/api/v1', inMemoryRoutes); // in memory storage
app.use('/api/v2', mongoRoutes); // mongoDB storage

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
    console.log('Server is running on port', port);
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
