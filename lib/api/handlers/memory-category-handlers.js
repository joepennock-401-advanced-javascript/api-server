'use strict';

const uuid = require('uuid').v4;

let notMongo = [];
let memoryCategoryHandlers = {};

// create new category
memoryCategoryHandlers.createOneCategory = function(req, res, next){

  let { name, display_name, description } = req.body;
  let newRecord = { name, display_name, description };
  if (newRecord.name) {

  newRecord.id = uuid();
  notMongo.push(newRecord);
  res.status(201).json(newRecord);

  } else {
    next('500 error');
  };

};

// get all categories
memoryCategoryHandlers.getAllCategories = function(req, res, next){

  res.status(200).json(notMongo);

};

// get one category by id
memoryCategoryHandlers.getOneCategoryById = function(req, res, next){
  
  let id = req.params.id;
  let record = notMongo.filter( record => {
    return record.id === id;
  });
  res.status(200).json(record[0]);

};

// update a category in the db by id
memoryCategoryHandlers.updateCategoryById = function(req, res, next){

  let idToUpdate = req.params.id;
  let { id, name, display_name, description} = req.body;
  let updatedRecord = { id, name, display_name, description};
  notMongo = notMongo.map( record => {
    return record.id === idToUpdate ? updatedRecord : record;
  });
  updatedRecord.id = uuid();
  res.status(201).json(updatedRecord);

};

// delete one category by id
memoryCategoryHandlers.deleteOneCategoryById = function(req, res, next){

  let id = req.params.id;
  notMongo = notMongo.filter( record => record !== id);

  res.status(200).json({});

};

module.exports = memoryCategoryHandlers;