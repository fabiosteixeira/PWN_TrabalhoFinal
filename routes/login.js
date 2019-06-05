/* GET favoritos. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Super Hérois da Marvel' });
  });
  
  module.exports = router;