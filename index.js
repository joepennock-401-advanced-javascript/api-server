'use strict';

/** Access environmental variables for mongo URI and server PORT */
require('dotenv').config();

/** Require server file with all server-side logiv and related files imports */
const server = require('./lib/server');
const mongoose = require('mongoose');

/** Establish connection to MongoDB via mongoose using .env variable for URI */
// mongoose.connect(process.env.MONGODB_URI,{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

/** Establish connection to server running on local host using .env variable for PORT */
server.start(process.env.PORT);