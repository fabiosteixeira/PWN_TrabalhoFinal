var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/marvel/busca/'); //redireciona para página de pesquisa 
});

module.exports = router;
