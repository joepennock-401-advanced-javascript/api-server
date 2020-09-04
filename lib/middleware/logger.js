'use strict';

module.exports = (req, res, next) => {
  console.log(
    'Recieved a ' + req.method + ' request to route ' + req.path + ' @ ' + req.timestamp
    );
  next();
};