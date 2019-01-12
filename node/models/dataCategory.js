const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const DataCategorySchema = new Schema({
  dataCategory: { type: String },
  description: { type: String },
  changeLog: { dateAdded: { type: Date },
               userAdded: { type: String },
               changeType: { type: String },
               versionID: { type: Number, 'default': 0},
               previousVersionID: { type: Number, 'default': 0},
               dateDeactivated: { type: Date }
             }
});

module.exports = mongoose.model('DataCategory', DataCategorySchema);
