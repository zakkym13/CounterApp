var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const param = { counter: 100 };
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});

module.exports = router;
