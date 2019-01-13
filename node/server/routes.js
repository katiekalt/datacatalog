const express = require('express'),
  router = express.Router(),
  home = require('../controllers/home')
  load = require('../controllers/load');


module.exports = (app)=>{
  router.get('/', home.index);
  router.get('/load/attributes/full', load.index);
  app.use(router);
};
