'use strict';

const productsCollection = require('../../../models/products/products-collection.js')

const mongoProductHandlers = {};
const schema = new productsCollection();

mongoProductHandlers.createOneProduct = async (req, res, next) => {

  if( req.body.name){

    let newRecord = await schema.post(req.body);
    res.status(201).json(newRecord);

  }
  else {

    next('post not working');

  };

};

mongoProductHandlers.getAllProducts = async (req, res, next) => {

  let allData = await schema.get();
  res.status(200).json(allData);
  
};

mongoProductHandlers.getOneProductById = async (req, res, next) => {
  
  let id = req.params.id;
  let singleRecord = await schema.get(id);
  res.status(200).json(singleRecord);

};

mongoProductHandlers.updateOneProductById = async (req, res, next) => {

  let id = req.params.id;
  let recordToUpdate = req.body;
  let updatedRecord = await schema.put(id, recordToUpdate);
  res.status(201).json(updatedRecord);
  
};

mongoProductHandlers.deleteOneProductById = async (req, res, next) => {
  
  let id = req.params.id;
  let deletedRecord = await schema.delete(id);
  res.status(200).json({});

};

module.exports = mongoProductHandlers;