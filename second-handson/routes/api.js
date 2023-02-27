var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send(' Express is a powerful and versatile web framework that can be used to build a wide variety of web applications and APIs.');
  });
  
  module.exports = router;