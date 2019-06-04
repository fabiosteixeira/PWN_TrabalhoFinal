const express = require('express')
const router = express.Router()
const passsport = require('passport')

router.get('/', passsport.authenticate('github'));

router.get('/callback',
       passsport.authenticate('github',{failureRedirect: '/'}),
       function(req, res) {
           console.log(req)
           res.redirect('/profile');
       }    
);

module.exports = router;