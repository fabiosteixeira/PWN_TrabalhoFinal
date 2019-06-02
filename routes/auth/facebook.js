const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', passport.authenticate('facebook'));

router.get('/callback',
    passport.authenticate('facebook', { failureRedirect: '/index' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/profile');
    }
);

  module.exports = router;