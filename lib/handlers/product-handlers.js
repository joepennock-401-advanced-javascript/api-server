'use strict';

const uuid = require('uuid').v4;

let notMongo = []; 
let productHandlers = {};

// post one product
productHandlers.createOneProduct = function(req, res, next){

  let { category, name, display_name, description } = req.body;
  let newRecord = { category, name, display_name, description };

  if(newRecord.name && newRecord.category && newRecord.display_name && newRecord.description) {

    newRecord.id = uuid();
    notMongo.push(newRecord);
    res.status(201).json(newRecord);

  } else {
    next('500 error');
  };

};

// get all products
productHandlers.getAllProducts = function(req, res, next){

  res.status(200).json(notMongo);

};

// get one product by id
productHandlers.getOneProductById = function(req, res, next){
  
  let id = req.params.id;
  let record = notMongo.filter( record => {
    return record.id === id;
  });
  res.status(200).json(record[0]);

};

// update a product in the db by id
productHandlers.updateProductById = function(req, res, next){

  let idToUpdate = req.params.id;
  let { id, category, name, display_name, description} = req.body;
  let updatedRecord = { id, category, name, display_name, description};
  notMongo = notMongo.map( record => {
    return record.id === idToUpdate ? updatedRecord : record;
  });
  updatedRecord.id = uuid();
  res.status(201).json(updatedRecord);

};

// delete one product by id
productHandlers.deleteOneProductById = function(req, res, next){

  let id = req.params.id;
  notMongo = notMongo.filter( record => record !== id);

  res.status(200).json({});

};

module.exports = productHandlers;