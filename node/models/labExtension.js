const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const LabExtensionSchema = new Schema({
  processingCode: { type: String },
  sourceSystemIDs: {  lisNumber: { type: String }},
  loincCode: { type: String },
  description: { type: String },
  synonyms: { type: String },
  stdUnitOfMeasure: { type: String },
  specimeType: { type: String },
  clinicalInfo: { type: String },
  changeLog: { dateAdded: { type: Date },
               userAdded: { type: String },
               changeType: { type: String },
               versionID: { type: Number, 'default': 0},
               previousVersionID: { type: Number, 'default': 0},
               dateDeactivated: { type: Date }
             }
});

module.exports = mongoose.model('LabExtension', LabExtensionSchema);
