const sidebar = require('../helpers/sidebar'),
      fs = require('fs');
//require the mongoClient from mongodb module
var MongoClient = require('mongodb').MongoClient;

module.exports = {
  index(req, res){
    console.log('localhost:3300/');

    var sampleCollection = 'attribute';
    //We need to insert these chapters into mongoDB
    var fetchAttributes = () => {
      try {
        var attributeString = fs.readFileSync('./server/public/upload/temp/uszcodebook.json');
        // console.log("JSONAttributes: " + JSON.parse(attributeString));
        return JSON.parse(attributeString);
      } catch (e) {
        console.log(e);
        return [];
      }
    };

    MongoClient.connect('mongodb://localhost/USZDataCatalog',{useNewUrlParser: true}, function(err, database) {

      console.log("Connected correctly to server");

      // Get some collection
      var db = database.db('USZDataCatalog');
      var collection = db.collection('attribute');

      // console.log(db);
      // console.log(fetchAttributes);

      var attributes = fetchAttributes();
      console.log(attributes);

      collection.insertMany(attributes,function(error,result){
        // here result will contain an array of records inserted
        if(!error) {
          console.log("Success :"+result.ops.length+" attributes inserted!");
        } else {
          console.log("Some error was encountered!");
        }
        database.close();
      });
    });

    res.render('index');
  }
};
