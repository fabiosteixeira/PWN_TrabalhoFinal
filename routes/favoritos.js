var express = require('express');
var router = express.Router();

/* GET favoritos. */
router.get('/', function(req, res, next) {
  res.render('favoritos', { title: 'Meus Super Hérois da Marvel Favoritos' });
});

module.exports = router;