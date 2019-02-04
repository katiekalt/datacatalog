const express = require('express'),
  router = express.Router(),
  home = require('../controllers/home'),
  load = require('../controllers/load'),
  attribute = require('../controllers/attribute'),
  test = require('../controllers/test');

module.exports = (app)=>{
  router.get('/', home.index);
  router.get('/attribute', attribute.index);
  router.get('/test', test.index);
  router.get('/load/attributes/full', load.index);
  router.get('/attribute/:attributeUniqueID', attribute.detail);
  app.use(router);
};
