const model = require('../models');

module.exports = {
  index(req, res){
    console.log('localhost:3300/attribute');
    var attributeModel = [];
    var lastAttributeNode = "", lastL2AttributeNode = "";

    model.Attribute.find({},{}, { sort: {uniqueID: 1}}, (err, attributes)=>{
      if (err) { throw err; }

      var attributeNode = {};

      for (attribute of attributes) {

        attributeNode = {
          text: attribute.name +" ("+attribute.uniqueID+")",
          href: '#attribute',
          tags: [`${attribute.dependentAttributes}`],
          uniqueID: attribute.uniqueID,
          nodes: []};

        if (attribute.parentUniqueID == ""){
          attributeModel.push(attributeNode);
          lastAttributeNode = attributeNode;
        } else {
          if (attribute.parentUniqueID == lastAttributeNode.uniqueID) {
            lastAttributeNode.nodes.push(attributeNode);
            lastL2AttributeNode = attributeNode;
          } else {
            lastL2AttributeNode.nodes.push(attributeNode);
          }
        }
      }
      res.send(attributeModel);
    });
  },
  detail(req, res){
    console.log(req.params);
    var attributeID = req.params.attributeUniqueID;
    console.log('localhost:3300/attribute/' + attributeID);

    model.Attribute.findOne({ uniqueID: attributeID },
        (err, attribute)=>{
            if (err) { throw err; }
            if (attribute) {
              console.log( attribute.uniqueID);
              // res.send(JSON.stringify(attribute));
              res.json(attribute);
            } else {
                res.redirect('/');
            }
        });


    // res.send("requested attribute id " + {$regex: req.params.attributeUniqueID});
    // console.log('localhost:3300/attribute/' + $regex: req.params.attributeUniqueID);
  }
};
