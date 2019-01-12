const sidebar = require('../helpers/sidebar');

module.exports = {
  index(req, res){
    console.log('localhost:3300/');

    res.render('index');
  }
};
