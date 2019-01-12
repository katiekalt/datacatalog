const express = require('express'),
  router = express.Router(),
  home = require('../controllers/home');


module.exports = (app)=>{
  router.get('/', home.index);
  app.use(router);
};
