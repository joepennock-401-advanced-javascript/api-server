'use strict';

/* Collection containing all mongo logic for CRUD ops onvolving products. */

const schema = require('./products-schema');
const errorHandler = require('../../middleware/404');

class productModel {

  // .find()
  get(id){
    if(!id){
      return schema.find({});
    } else {
      return schema.findById(id);
    };
  };

  // .save()
  post(newRecord){
    let record = new schema(newRecord);
    return record.save();
  };

  // .findOneByIdAndUpdate()
  put(id){
    if(!id){
      errorHandler();
    } else if(id){
      return schema.findByIdAndUpdate(id);
    };
  };

  // .findOneByIdAndDelete()
  delete(id){
    if(!id){
      errorHandler();
    } else if (id){
      return schema.findByIdAndDelete(id);
    };
  };

};

module.exports = new productModel;