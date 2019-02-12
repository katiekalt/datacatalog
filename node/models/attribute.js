const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const AttributeSchema = new Schema({
  category: { type: String },
  subCategory: { type: String },
  uniqueID: { type: String },
  parentUniqueID: { type: String },
  mainAttribute: { type: Number, 'default': 1 }, // Only Attributes with value 1 can be selected for extraction
  name: { type: String },
  attributType: { type: String },
  format: { type: String },
  description: { type: String },
  sensitive: { type: String },
  example: { type: String },
  occurency: { type: Number, 'default': 0},   // attributes with occurency <> 0 can occure several times in the bloc
  nullValue: { type: String },
  codingSystem: { type: String },
  coreDatasetVariableID: { type: String },
  snomedConcept: { type: String },
  additionalComments: { type: String },
  technicalName: { type: String },
  sourceSystem: { type: String },
  dependentAttributes: { type: Number, 'default': 0},
  sourceElement: { type: String },
  sourceVerified: { type: Number, 'default': 0},  // sourceVerified = 1 confirms that the source definition is correct
  changeLog: { activated: { type: Date },
               deactivated: { type: Date },
               dateChanged: { type: Date },
               userName: { type: String },
               activity: { type: String },
               version: { type: Number, 'default': 0}
             }
});

module.exports = mongoose.model('Attribute', AttributeSchema);
