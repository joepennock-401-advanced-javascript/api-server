'use strict';

/**
 * Requiring 3rd party dependencies.
 */
const express = require('express');
const app = express();

/**
 * Requiring in custom middleware modules.
 */
const timestamp = require('./api/middleware/timestamp.js');
const logger = require('./api/middleware/logger.js');
const notFound = require('./api/middleware/404.js');
const serverError = require('./api/middleware/500.js');

/**
 * Requiring in separate routes.
 */
const inMemoryRoutes = require('./api/routes/in-memory-routes.js'); // in memory storage
const mongoRoutes = require('./api/routes/v1.js'); // mongoDB storage

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
app.use('/api/memory', inMemoryRoutes); // in memory storage
app.use('/api/v1', mongoRoutes); // mongoDB storage

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
