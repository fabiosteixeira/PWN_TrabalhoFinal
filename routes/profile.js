const express = require('express')
const router = express.Router()

router.get('/',
    require('connect-ensure-login').ensureLoggedIn(),
    (req, res) => {
        res.render('profile', {profile: req.user})
    });

    module.exports = router;