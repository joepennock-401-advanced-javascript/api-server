'use strict';

const categoryCollection = require('../../models/categories/categories-collection');

const mongoCategoryHandlers = {};
const schema = new categoryCollection();

mongoCategoryHandlers.createOneCategory = async (req, res, next) => {

  console.log(req.body);
  if(req.body.name){

    let newRecord = await schema.post(req.body);
    res.status(201).json(newRecord);
    
  } else {
    next('post not working');
  };

};

mongoCategoryHandlers.getAllCategories = async (req, res, next) => {

  let allData = await schema.get()
  res.status(200).json(allData);
  
};

mongoCategoryHandlers.getOneCategoryById = async (req, res, next) => {

  let id = req.params.id;
  let singleRecord = await schema.get(id);
  res.status(200).json(singleRecord);
  
};

mongoCategoryHandlers.updateOneCategoryById = async (req, res, next) => {

  let id = req.params.id;
  let recordToUpdate = req.body;
  let updatedRecord = await schema.put(id, recordToUpdate);
  res.status(201).json(updatedRecord);
  
};

mongoCategoryHandlers.deleteOneCategoryById = async (req, res, next) => {

  let id = req.params.id;
  let deletedRecord = await schema.delete(id);
  res.status(200).json({});
  
};

module.exports = mongoCategoryHandlers;