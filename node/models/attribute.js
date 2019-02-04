const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const AttributeSchema = new Schema({
  dataCategory: { type: String },
  dataSubCategory: { type: String },
  uniqueID: { type: String },
  parentUniqueID: { type: String },
  mainAttribute: { type: Number, 'default': 1 }, // Only Attributes with value 1 can be selected for extraction
  name: { type: String },
  attributType: { type: String },
  format: { type: String },
  description: { type: String },
  sensitive: { type: Number, 'default': 0 },  // attributes with sensitivity <> 0 are to be treated sensitive
  example: { type: String },
  occurency: { type: Number, 'default': 0},   // attributes with occurency <> 0 can occure several times in the bloc
  nullValue: { type: String },
  codingSystem: { type: String },
  coreDataVariableID: { type: String },
  snomedConcept: { type: String },
  additionalComments: { type: String },
  technicalName: { type: String },
  sourceSystem: { type: String },
  dependentAttributes: { type: Number, 'default': 0},
  sourceElement: { type: String },
  sourceVerified: { type: Number, 'default': 0},  // sourceVerified = 1 confirms that the source definition is correct
  changeLog: { dateAdded: { type: Date },
               userChange: { type: String },
               changeType: { type: String },
               versionID: { type: Number, 'default': 0},
               previousVersionID: { type: Number, 'default': 0},
               dateDeactivated: { type: Date }
             }
});

module.exports = mongoose.model('Attribute', AttributeSchema);
