'use strict';

/* Collection containing all mongo logic for CRUD ops involving categories. */

const schema = require('./categories-schema');

/**
 * Class for handling category crud ops
 */
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
  async post(newRecord){
    let record = await new schema(newRecord);
    return record.save();
  };

  // .findOneByIdAndUpdate()
  put(id){
    return schema.findByIdAndUpdate(id, update, {new: true})
  };

  // .findOneByIdAndDelete()
  delete(id){
    return schema.findByIdAndDelete(id);
  };

};

module.exports = categoryModel;