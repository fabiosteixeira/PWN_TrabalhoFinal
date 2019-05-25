var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inicio', { title: 'Super Hérois da Marvel' });
});

module.exports = router;
