const express = require('express')
const router = express.Router()

router.get('/',
    require('connect-ensure-login').ensureLoggedIn(),
    (req, res) => {
        res.render('home', {profile: req.user})
    });

    module.exports = router;