const express = require('express');
const router = express.Router();
const facebookRouter = require('./facebook');
const githubRouter = require('./github');

router.use('/facebook', facebookRouter);
router.use('/github', githubRouter);


module.exports = router;