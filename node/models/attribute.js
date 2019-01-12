const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
//  ,
//  path = require('path');

const AttributeSchema = new Schema({
  name: { type: String },
  description: { type: String }
});

module.exports = mongoose.model('Attribute', AttributeSchema);
