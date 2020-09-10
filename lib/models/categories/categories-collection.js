'use strict';

/* Collection containing all mongo logic for CRUD ops involving categories. */

const schema = require('./categories-schema');
const errorHandler = require('../../middleware/404');

class categoryModel {

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

module.exports = new categoryModel;