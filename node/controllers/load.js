const fs = require('fs'),
      Models = require('../models');

module.exports = {
  index:(req, res)=>{
    // console.log('localhost:3300/');

    var fetchAttributes = () => {
      try {
        var attributeString = fs.readFileSync('./server/public/upload/temp/uszcodebook.json');
        return JSON.parse(attributeString);
      } catch (e) {
        console.log(e);
        return [];
      }
    };

    var attributeModel = fetchAttributes();
    // var attribute;

    for (attribute of attributeModel) {
      console.log('For Attribute.uniqueID ' + attribute.uniqueID);

      var newAttribute = new Models.Attribute({
        category: attribute.category,
        subCategory: attribute.subCategory,
        uniqueID: attribute.uniqueID,
        parentUniqueID: attribute.parentUniqueID,
        mainAttribute: attribute.mainAttribute,
        name: attribute.name,
        attributType: attribute.attributType,
        format: attribute.format,
        description: attribute.description,
        sensitive: attribute.sensitive,
        example: attribute.example,
        occurency: attribute.occurency,
        nullValue: attribute.nullValue,
        codingSystem: attribute.codingSystem,
        coreDatasetVariableID: attribute.coreDatasetVariableID,
        snomedConcept: attribute.snomedCT,
        additionalComments: attribute.additionalComments,
        technicalName: attribute.technicalName,
        sourceSystem: attribute.sourceSystem,
        dependentAttributes: attribute.dependentAttributes,
        sourceElement: attribute.sourceElement,
        sourceVerified: attribute.sourceVerified,
        changeLog: {
          activated: attribute.activated,
          activity: attribute.activity,
          userName: attribute.userName,
          version: attribute.version,
          dateChanged: attribute.dateChanged,
          deactivated: attribute.deactivated
        }
      });
      newAttribute.save((err, attribute)=>{
        if (err) { throw err };
        console.log(`Successfully inserted attribute: ${attribute}`);
      });

    };
    // model.Attribute.find({ uniqueID: attribute.uniqueID }, (err, attrib)=>{
    //   console.log('New Attribute.uniqueID ' + attribute.uniqueID);
    // });
        // if (err) { throw err };
        // if (attribute.length > 0) {
          // console.log('Found Attribute.uniqueID ' + attribute.uniqueID);
            // saveAttribute();
        // } else {
    //
        // }

    res.render('index');
  }
};
