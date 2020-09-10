'use strict';

const categoryCollection = require('../../models/categories/categories-collection');

const mongoCategoryHandlers = {};

mongoCategoryHandlers.createOneCategory = function(res, req, next){

  let { name, display_name, description } = req.body;
  let newRecord = { name, display_name, description };

  if(newRecord.name){

    categoryCollection.post(newRecord);
    res.status(201).json(newRecord);

  } else {
    next('500 server error');
  };

};

mongoCategoryHandlers.getAllCategories = function(res, req, next){
  
};

mongoCategoryHandlers.getOneCategoryById = function(res, req, next){
  
};

mongoCategoryHandlers.updateOneCategoryById = function(res, req, next){
  
};

mongoCategoryHandlers.deleteOneCategoryById = function(res, req, next){
  
};

module.exports = mongoCategoryHandlers;