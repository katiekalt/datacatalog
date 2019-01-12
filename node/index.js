const express = require('express');
config = require('./server/configure');
mongoose = require('mongoose');
let app = express();

app.set('port', process.env.PORT || 3300);
app.set('Views', `${__dirname}/views`);
app = config(app);

mongoose.connect('mongodb://localhost/USZDataCatalog', {
  // useMongoClient: true
});
mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

const server = app.listen(app.get('port'), () => {
  console.log(`Server up: http://localhost:${app.get('port')}`);
});
